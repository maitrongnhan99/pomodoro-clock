import React, { useState } from 'react'
import './App.css'
import Timer from './components/Timer'
import TimerSetting from './components/TimerSetting'

const INITIAL_STATE = {
    timerOn: false,
    break: false,
    timer: 1500, //in seconds, default is 1500
    breakTime: 5, //in minutes, default is 5
    sessionTime: 25, //in minutes, default is 25
}
const App = () => {
    const [timer, setTimer] = useState(INITIAL_STATE)

    const reset = () => {
        setTimer(INITIAL_STATE)
        clearInterval(timer.timer)
        let beep = document.getElementById('beep')
        beep.pause()
        beep.currentTime = 0
    }

    const startStopTimer = () => {
        if (timer.timerOn === true) {
            setTimer({
                ...timer,
                timerOn: false,
            })
            clearInterval(timer.timer)
        } else if (timer.timerOn === false) {
            setTimer({
                ...timer,
                timerOn: true,
            })
            if (timer.timer > 0) {
                timer.timer = setInterval(() => {
                    let currTimer = timer.timer
                    let breakStatus = timer.break
                    if (currTimer > 0) {
                        currTimer -= 1
                    } else if (currTimer === 0 && breakStatus === false) {
                        currTimer = timer.breakTime * 60
                        breakStatus = true
                    } else if (currTimer === 0 && breakStatus === true) {
                        currTimer = timer.sessionTime * 60
                        breakStatus = false
                    }
                    setTimer({
                        ...timer,
                        timer: currTimer,
                        break: breakStatus,
                    })
                }, 1000)
            }
        }
    }

    const increment = (e, timerType) => {
        /* Adds one minute to a timer.  Can reach but not go above 60.
         */
        //if timer is running then no time can be added
        if (timer.timerOn === true) {
            return
        }

        switch (timerType) {
            case 'session':
                if (timer.sessionTime < 60) {
                    let newSession = timer.sessionTime + 1
                    setTimer({
                        ...timer,
                        sessionTime: newSession,
                        timer: newSession * 60,
                    })
                }
                break
            case 'break':
                if (timer.breakTime < 60) {
                    setTimer({
                        ...timer,
                        breakTime: timer.breakTime + 1,
                    })
                }
                break
            default:
                return
        }
    }

    const decrement = (e, timerType) => {
        //Removes one minute from a timer.  Timer cannot equal zero.
        if (timer.timerOn === true) {
            return
        }
        switch (timerType) {
            case 'session':
                if (timer.sessionTime > 1) {
                    let newSession = timer.sessionTime - 1
                    setTimer({
                        ...timer,
                        sessionTime: newSession,
                        timer: newSession * 60,
                    })
                }
                break
            case 'break':
                if (timer.breakTime > 1) {
                    setTimer({ ...timer, breakTime: timer.breakTime - 1 })
                }
                break
            default:
                return
        }
    }

    return (
        <div className="container text-center">
            <Timer
                timerOn={timer.timerOn}
                timer={timer.timer}
                startStop={startStopTimer}
                reset={reset}
                breakTime={timer.break}
            />
            <TimerSetting
                breakTime={timer.breakTime}
                sessionTime={timer.sessionTime}
                increment={increment}
                decrement={decrement}
            />
        </div>
    )
}

export default App
