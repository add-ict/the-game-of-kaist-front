import React, {useEffect, useState} from "react";

const turns = ["Turn 1", "Turn 2", "Fall 1",
    "Turn 3", "Turn 4", "Fall 2",
    "Turn 5", "Turn 6", "Spring 1",
    "Turn 7", "Turn 8", "Spring 2",
]
const Turns = ({state}) => {
    const {turn} = state;
    const [blink, setBlink] = useState(true);
    useEffect(()=>{
        const id = setInterval(()=>{
            setBlink(prev=>!prev)
        },1000)
        return ()=>{clearInterval(id)}
    },[])
    return (
        <div id="turnsContainer">
            {turns.map((x, i) => <div key={i} className={"turnBlock" + (((turn > i)||((turn==i)&&blink)) ? " turnBlock-on" : "")}>{x}</div>)}
        </div>
    );
};

export default Turns;