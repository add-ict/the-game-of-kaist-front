import React from 'react';
import {Route} from "react-router-dom";
import NotFound from "./NotFound";
import Student from "./Student";

const StudentRoute = ({match, classID, setClassID}) => {
    console.log("render student route", match.path)
    return (
        <>
            <Route exact path={`${match.path}`} component={NotFound}/>
            <Route path={`${match.path}/:classID`}
                   render={res => <Student match={res.match} classID={classID} setClassID={setClassID}/>}
            />
        </>
    );
};

export default StudentRoute;