import React from "react";
import {useSelector} from "react-redux";

const turns = ["Turn 1", "Turn 2", "Fall 1",
    "Turn 3", "Turn 4", "Fall 2",
    "Turn 5", "Turn 6", "Spring 1",
    "Turn 7", "Turn 8", "Spring 2",
]
const Turns = () => {
    const {turn,time} = useSelector(state => ({
        turn: state.publicDB.turns,
        time: state.publicDB.time,
    }));
    return (
        <div id="turnsContainer">
            {turns.map((x, i) => <div key={i} className={"turnBlock" + (((turn > i)||((turn==i)&&(time%2)==1)) ? " turnBlock-on" : "")}>{x}</div>)}
        </div>
    );
};

export default Turns;