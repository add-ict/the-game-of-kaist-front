import React from 'react';
import Game from "../atoms/Game";

const Admin = ({match, classID, setClassID, updater}) => {
    setClassID(match.params.classID)
    return <>
        <div id="headerText">Debug:Admin#{classID.current}</div>
        <Game updater={updater}/>
    </>;
};

export default Admin;