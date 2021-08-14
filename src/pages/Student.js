import React from 'react';
import Game from "../atoms/Game";

const Student = ({match, classID, setClassID}) => {
    console.log("render student")
    setClassID(match.params.classID)

    return (
        <>
        <div id="headerText">Debug:Student#{classID.current}</div>
        <Game/>
        </>
    );
};

export default Student;