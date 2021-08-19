import React from 'react';
import "./Game.scss"
import Timer from "./Timer";
import Turns from "./Turns";
import Score from "./Score"
import Char from "./Char"
import Ranking from "./Ranking"
import Deck from "./Deck"
import Conditional from "./Conditional";

const Game = ({admin,rootRef,CKPT, data, prev, timer, state, mapData}) => {
    return (
        <div id="gameContainer">
            <div id="leftSide">
                <div id="tempBG"/>
                <Timer rootRef={rootRef} timer={timer}/>
                <Turns rootRef={rootRef} state={state}/>
                <Score rootRef={rootRef} data={data}/>
                <Char rootRef={rootRef} admin={admin} data={data}/>
                <Deck rootRef={rootRef} data={data}/>
                <Ranking rootRef={rootRef} data={data} prev={prev}/>
            </div>
            <Conditional id="rightSide" rootRef={rootRef}/>
        </div>
    );
};

export default Game;