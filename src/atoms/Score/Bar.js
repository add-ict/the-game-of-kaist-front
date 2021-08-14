import React from "react";
const Scorebar = ({fraction, color, score}) => {
    let f = 0;
    if (fraction) f=fraction;
    if (f < 0) f = 0
    if (f > 1) f = 1
    return (
        <div id="score_barContainer">
            <div id="score_barContainer_BG">
                <div style={{"backgroundColor": color, "width": `calc(24vh * ${f})`}}/>
            </div>
            <div>{score}</div>
        </div>
    );
};

export default Scorebar;