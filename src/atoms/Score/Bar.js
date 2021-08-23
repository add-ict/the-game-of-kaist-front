import React from "react";
const Scorebar = ({fraction, color, score, pscore}) => {
    if (fraction < 0)
        return (
            <div id="score_barContainer">
                <div id="score_barContainer_BG" style={{"backgroundColor": "#363636"}}>
                </div>
                <div>{score} <span style={{color:"grey"}}>{score-pscore}</span></div>
            </div>
        );
    else if (fraction > 1)
        return (
            <div id="score_barContainer">
                <div id="score_barContainer_BG" style={{"backgroundColor": "#ffd153"}}>
                    <div style={{"backgroundColor": color, "width": `calc(28vh)`}}/>
                </div>
                <div>{score} <span style={{color:"grey"}}>{score-pscore}</span></div>
            </div>
        );
    else
        return (
            <div id="score_barContainer">
                <div id="score_barContainer_BG">
                    <div style={{"backgroundColor": color, "width": `calc(23vh * ${fraction})`}}/>
                </div>
                <div>{score} <span style={{color:"grey"}}>{score-pscore}</span></div>
            </div>
        );
};

export default Scorebar;