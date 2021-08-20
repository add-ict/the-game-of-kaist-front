import React from 'react';
const Timer = ({state,timer}) => {
    return (
        <div id="timerContainer">
            <div>{state.group}</div>
            <div>{(100 + Math.floor(timer.time / 60)).toString().substring(1, 3)}:{(100 + timer.time % 60).toString().substring(1, 3)}</div>
        </div>
    );
};

export default Timer;