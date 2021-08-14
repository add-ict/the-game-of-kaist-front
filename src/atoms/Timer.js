import React from 'react';
import {useSelector} from "react-redux";
import {gameStateName} from "../gameStates"

const Timer = () => {
    const {timer, gameState} = useSelector(state => ({
        timer: state.publicDB.time,
        gameState: state.publicDB.gameState,
    }));
    return (
        <div id="timerContainer">
            <div>{gameStateName(gameState)}</div>
            <div>{(100 + Math.floor(timer / 60)).toString().substring(1, 3)}:{(100 + timer % 60).toString().substring(1, 3)}</div>
        </div>
    );
};

export default Timer;