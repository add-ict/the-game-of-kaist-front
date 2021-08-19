import React from 'react';
import Game from "../atoms/Game";

const Admin = ({match, rootRef,CKPT, data, prev, timer, state, mapData}) => {
    return <>
        <Game classID={match.params.classID} rootRef={rootRef} admin={true} CKPT={CKPT} data={data} prev={prev} timer={timer} state={state} mapData={mapData}/>
    </>;
};

export default Admin;