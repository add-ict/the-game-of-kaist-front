import React, {useEffect, useRef, useState} from 'react';
import {Link, Route, Switch} from "react-router-dom";

import Home from './pages/Home'
import StudentRoute from "./pages/StudentRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import AdminRoute from "./pages/AdminRoute";
import NotFound from "./pages/NotFound";
import {getDB} from "./Firebase";
import 'antd/dist/antd.css';

const scoreChange = {
    2: true,
    4: true,
    6: true,
    7: true
}

const rootRef = getDB("/");
const ckptRef = rootRef.child("CKPT");
const reloadRef = rootRef.child("RELOAD");
const timerRef = rootRef.child("timer");
const stateRef = rootRef.child("state");
const turnGroupRef = rootRef.child("turnGroup");
const turnGroupsRef = rootRef.child("turnGroups");
const mapDataRef = rootRef.child("mapData");
let jumper = false;

const App = () => {
    const [CKPT,setCKPT] = useState(false);
    const [turnGroup,setTurnGroup] = useState("init");
    const [turnGroups,setTurnGroups] = useState({});
    const [data,setData] = useState({});
    const [prev,setPrev] = useState({});
    const [timer,setTimer] = useState({});
    const [state,setState] = useState({});
    const [mapData,setMapData] = useState({});
    const [dataRef, setDataRef] = useState();
    const loaded = useRef(false);
    useEffect(()=>{
        loaded.current=Date.now();
        reloadRef.on("value",snapshot=>{
            if (loaded.current < snapshot.val())
                window.location.reload(false);
        })
        return ()=>{reloadRef.off()}
    },[])
    useEffect(()=>{
        ckptRef.on("value",snapshot=>{setCKPT(snapshot.val())})
        return ()=>{ckptRef.off()}
    },[]);
    useEffect(()=>{
        timerRef.on("value",snapshot=>{setTimer(snapshot.val())})
        return ()=>{timerRef.off()}
    },[]);
    useEffect(()=>{
        stateRef.on("value",snapshot=>{
            console.log("Updated state")
            setState(snapshot.val())})
        return ()=>{stateRef.off()}
    },[]);
    useEffect(()=>{
        turnGroupsRef.on("value",snapshot=>{
            setTurnGroups(snapshot.val())
        })
        return ()=>{turnGroupsRef.off()}
    },[]);
    useEffect(()=>{
        turnGroupRef.on("value",snapshot=>{
            setTurnGroup(snapshot.val())
        })
        return ()=>{turnGroupRef.off()}
    },[]);
    useEffect(()=>{
        mapDataRef.on("value",snapshot=>{setMapData(snapshot.val())})
        return ()=>{mapDataRef.off()}
    },[]);
    useEffect(()=>{
        console.log("JUMP hi!")
        setData(turnGroups?.[turnGroup])
        let newPrev=turnGroups?.[data?.prev];
        if (state) {
            let iter=2;
            if (state.group!==8&&state.group%2===0) iter=3;
            for (let i=0;i<iter-1;i++) newPrev = turnGroups?.[newPrev?.prev];
        }
        console.log("NAME",data?.turnGroup,prev?.turnGroup)
        setPrev(newPrev)
        setDataRef(turnGroupsRef.child(turnGroup))
    },[turnGroup,turnGroups,jumper])
    return (
        <>
            <Switch>
                <Route exact path="/"
                       render={() => <Home rootRef={rootRef}/>}/>
                <Route exact path="/home"
                       render={() => <Home rootRef={rootRef}/>}/>
                <Route path="/app"
                       render={res => <StudentRoute CKPT={CKPT} data={data} prev={prev} timer={timer} state={state} mapData={mapData} match={res.match} rootRef={rootRef} dataRef={dataRef}/>}/>
                <Route path="/dashboard" render={() => <Dashboard dataRef={dataRef} reloadRef={reloadRef} CKPT={CKPT} ckptRef={ckptRef} data={data} state={state} timerRef={timerRef} timer={timer}/>}/>
                <Route path="/admin"
                       render={res => <AdminRoute CKPT={CKPT} data={data} prev={prev} timer={timer} state={state} mapData={mapData} match={res.match} rootRef={rootRef} dataRef={dataRef}/>}/>
                <Route component={NotFound}/>
            </Switch>
        </>
    );
};

export default App;
