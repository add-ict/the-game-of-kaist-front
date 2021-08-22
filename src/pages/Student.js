import React from 'react';
import Game from "../atoms/Game";

const Student = ({match, rootRef,CKPT, data, prev, timer, state, mapData}) => {
    return (
        <>
        <Game classID={match.params.classID} rootRef={rootRef} admin={false} CKPT={CKPT} data={data} prev={prev} timer={timer} state={state} mapData={mapData}/>
        </>
    );
};

export default Student;