import React from 'react'

const TimerSetting = ({ increment, decrement, sessionTime, breakTime }) => {
    return (
        <div className="wrapper">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div id="session-label">SESSION LENGTH</div>
                    <div id="session-length" className="timer-set">
                        <button
                            className="btn btn-light"
                            id="session-increment"
                            onClick={(e) => {
                                increment(e, 'session')
                            }}
                        >
                            <i className="fa fa-plus" aria-hidden="true" />
                        </button>
                        <span className="num">{sessionTime}</span>
                        <button
                            className="btn btn-light"
                            id="session-decrement"
                            onClick={(e) => {
                                decrement(e, 'session')
                            }}
                        >
                            <i className="fa fa-minus" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div id="break-label">BREAK LENGTH</div>
                    <div id="break-length" className="timer-set">
                        <button
                            className="btn btn-light"
                            id="break-increment"
                            onClick={(e) => {
                                increment(e, 'break')
                            }}
                        >
                            <i className="fa fa-plus" aria-hidden="true" />
                        </button>
                        <span className="num">{breakTime}</span>
                        <button
                            className="btn btn-light"
                            id="break-decrement"
                            onClick={(e) => {
                                decrement(e, 'break')
                            }}
                        >
                            <i className="fa fa-minus" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimerSetting
