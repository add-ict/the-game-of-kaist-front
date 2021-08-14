import React, {useEffect, useRef, useState} from 'react';
import {Link, Route, Switch} from "react-router-dom";

import Home from './pages/Home'
import StudentRoute from "./pages/StudentRoute";
import Dashboard from "./pages/Dashboard";
import AdminRoute from "./pages/AdminRoute";
import NotFound from "./pages/NotFound";
import {getAdminDB, getDBs} from "./Firebase";
import {useDispatch, useSelector} from "react-redux";
import {setData as publicSetData} from "./modules/publicDB";
import {setData as privateSetData} from "./modules/privateDB";

const App = () => {
    const [DBroot, setDBroot] = useState(0);
    const nDBroots = 3;
    const classID = useRef(0);
    const DB = useRef(null);
    const updater = name => x => DB.current.updater({[name]: x});
    const dispatch = useDispatch();
    const setClassID = (newID) => {
        if (DB.current) {
            if (newID == classID.current) return;
            DB.current.publicDB.off()
            DB.current.privateDB.off()
        }
        console.log(`class ${classID.current} => ${newID}`)
        classID.current = parseInt(newID);
        DB.current=getDBs(classID.current,DBroot,DBroot)
        console.log(DB.current)
        DB.current.publicDB.on('value', snapshot => {
            console.log('public update',snapshot.val())
            dispatch(publicSetData(snapshot.val()))
        })
        DB.current.privateDB.on('value', snapshot => {
            console.log('private update',snapshot.val())
            dispatch(privateSetData(snapshot.val()))
        })
    }
    const adminDB = useRef(getAdminDB(DBroot));
    useEffect(()=>{
        adminDB.current=getAdminDB(DBroot)
    },[DBroot])
    const {gameState} = useSelector(state => ({
        gameState: state.publicDB?.gameState,
    }));
    return (
        <>
            <header>
                <span>
                    Debug({DBroot}|{gameState}):
                </span>
                <Link to="/">
                    <button>Home</button>
                </Link>
                {!!DB.current?<Link to="/dashboard">
                    <button>Dashboard</button>
                </Link>:null}
            </header>
            <main>
                <Switch>
                    <Route exact path="/"
                           render={() => <Home nDBroots={nDBroots} DBroot={DBroot} setDBroot={setDBroot}/>}/>
                    <Route path="/app"
                           render={res => <StudentRoute match={res.match} classID={classID} setClassID={setClassID}/>}/>
                    <Route path="/dashboard" render={() => <Dashboard adminDB={adminDB.current}/>}/>
                    <Route path="/admin"
                           render={res => <AdminRoute match={res.match} classID={classID} setClassID={setClassID}
                                                      updater={updater}/>}/>
                    <Route component={NotFound}/>
                </Switch>
            </main>
        </>
    );
};

export default App;
