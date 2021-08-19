import React from 'react';
import {Route} from "react-router-dom";
import NotFound from "./NotFound";
import Admin from "./Admin";

const AdminRoute = ({match, rootRef, CKPT, data, prev, timer, state, mapData}) => {
    return (
        <>
            <Route exact path={`${match.path}`} component={NotFound}/>
            <Route path={`${match.path}/:classID`}
                   render={res => <Admin match={res.match} rootRef={rootRef} CKPT={CKPT} data={data} prev={prev} timer={timer} state={state} mapData={mapData}/>}/>
        </>
    );
};

export default AdminRoute;