import React from "react";
import "./index.scss"

const AskNothing = ({title}) => {
    return (
        <div id="askContainer" className={false?"submittedAskContainer":null}>
            <div><p>{title}</p></div>
        </div>
    );
}
export default AskNothing;