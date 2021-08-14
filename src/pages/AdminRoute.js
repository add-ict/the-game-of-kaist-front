import React from 'react';
import {Route} from "react-router-dom";
import NotFound from "./NotFound";
import Admin from "./Admin";

const AdminRoute = ({match, classID, setClassID, updater}) => {
    return (
        <>
            <Route exact path={`${match.path}`} component={NotFound}/>
            <Route path={`${match.path}/:classID`}
                   render={res => <Admin match={res.match} updater={updater} classID={classID}
                                         setClassID={setClassID}/>}/>
        </>
    );
};

export default AdminRoute;