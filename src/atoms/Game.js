import React from 'react';
import "./Game.scss"
import Timer from "./Timer";
import Turns from "./Turns";
import Score from "./Score"
import Char from "./Char"
import Ranking from "./Ranking"
import Deck from "./Deck"
import Conditional from "./Conditional";

const Game = ({classID, admin,rootRef,CKPT, data, prev, timer, state, mapData, dataRef}) => {
    if (!data) return <div><br/>NoData</div>;
    else
    return (
        <div id="gameContainer">
            <div id="leftSide">
                <div id="tempBG"/>
                <Timer rootRef={rootRef} timer={timer} state={state}/>
                <Deck rootRef={rootRef} data={data} classID={classID}/>

                <Turns rootRef={rootRef} state={state}/>
                <Score rootRef={rootRef} data={data} classID={classID}/>
                <Char admin={admin} data={data} classID={classID} dataRef={dataRef}/>
                <Ranking rootRef={rootRef} data={data} prev={prev}/>
            </div>
            <Conditional id="rightSide" data={data} prev={prev} timer={timer} state={state} mapData={mapData} classID={classID} rootRef={rootRef} dataRef={dataRef} t={0}/>
        </div>
    );
};

export default Game;