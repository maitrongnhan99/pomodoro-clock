import React from 'react'

const Timer = ({
    timer,
    timerOn,
    breakTime,
    reset = () => {},
    startStop = () => {},
}) => {
    let currMin = Math.floor(timer / 60)
    let currSec = Math.floor(timer % 60)

    if (currMin < 10) {
        currMin = '0'.concat(currMin.toString())
    } else {
        currMin = currMin.toString()
    }
    if (currSec < 10) {
        currSec = '0'.concat(currSec.toString())
    } else {
        currSec = currSec.toString()
    }

    let currTime = currMin.concat(':').concat(currSec)

    let beep = document.getElementById('beep')

    if (timer === 0) {
        beep.play()
    }

    return (
        <div className="wrapper">
            <div className="row justify-content-center" id="timer-label">
                {breakTime ? 'BREAK' : 'SESSION'}
            </div>
            <div className="row justify-content-center num" id="time-left">
                {currTime}
            </div>
            <div className="row justify-content-center">
                <button
                    className="btn btn-light"
                    id="start_stop"
                    onClick={startStop}
                >
                    {timerOn ? 'Pause' : 'Play'}
                    <i className="fa fa-play" aria-hidden="true" />
                    <i className="fa fa-pause" aria-hidden="true" />
                </button>
                <button
                    className="btn btn-light ml-1"
                    id="reset"
                    onClick={reset}
                >
                    reset
                    <i className="fa fa-refresh" aria-hidden="true" />
                </button>
            </div>
            <audio
                id="beep"
                src="http://www.trekcore.com/audio/computer/hailalert_1.mp3"
            />
        </div>
    )
}

export default Timer
