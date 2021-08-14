import React from 'react';
import "./Game.scss"
import Timer from "./Timer";
import Turns from "./Turns";
import Score from "./Score"
import Char from "./Char"
import Ranking from "./Ranking"
import Deck from "./Deck"
import Conditional from "./Conditional";

const Game = ({updater}) => {
    return (
        <div id="gameContainer">
            <div id="leftSide">
                <div id="tempBG"/>
                <Timer/>
                <Turns/>
                <Score/>
                <Char updater={updater}/>
                <Deck/>
                <Ranking/>
            </div>
            <Conditional id="rightSide" updater={updater}/>
        </div>
    );
};

export default Game;