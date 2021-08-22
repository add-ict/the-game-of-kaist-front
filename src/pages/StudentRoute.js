import React from 'react';
import {Route} from "react-router-dom";
import NotFound from "./NotFound";
import Student from "./Student";

const StudentRoute = ({match, rootRef, CKPT, data, prev, timer, state, mapData}) => {
    console.log("render student route", match.path)
    return (
        <>
            <Route exact path={`${match.path}`} component={NotFound}/>
            <Route path={`${match.path}/:classID`}
                   render={res => <Student match={res.match} rootRef={rootRef} CKPT={CKPT} data={data} prev={prev} timer={timer} state={state} mapData={mapData}/>}
            />
        </>
    );
};

export default StudentRoute;