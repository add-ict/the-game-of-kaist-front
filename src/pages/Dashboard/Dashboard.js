import React, {useEffect, useState} from 'react';
import "./Dashboard.scss"

const MOVEMENT = 1;
const MINIGAME = 2;
const SEASON_SELECT = 3;
const SEASON_USE = 4;
const LAST_SELECT = 5;
const LAST_USE = 6;
const BONUS_USE = 7;
const RESULT = 8;

const GS={
    1: "MOVEMENT",
    2: "MINIGAME",
    3: "SEASON_SELECT",
    4: "SEASON_USE",
    5: "LAST_SELECT",
    6: "LAST_USE",
    7: "BONUS_USE",
    8: "RESULT"
}

const Dashboard = ({data,state,CKPT,ckptRef,timerRef,timer}) => {
    return (
        <>
            <br/>
            <br/>
            <h1>Dashboard</h1>
            <div>Turn {state.turn}</div>
            <div>{GS[state?.group]}</div>
            <div>{timer.time}</div>
            <button onClick={()=>{ckptRef.set(false)}} disabled={!CKPT}>APPROVE</button><br/>
            <button onClick={()=>{timerRef.update({until:0,time:0})}}>SKIP TIME</button><br/>
            <button onClick={()=>{timerRef.update({until:timer.until-5000})}}>-5s</button>
            <button onClick={()=>{timerRef.update({until:timer.until+5000})}}>+5s</button>
            <button onClick={()=>{timerRef.update({until:timer.until+60000})}}>+1min</button>
            <button onClick={()=>{timerRef.update({until:timer.until+300000})}}>+5min</button>
            <div style={{"display":"flex"}}>
                {Array(5).fill(0).map((x,i)=><div className={(!!data?.["class"]?.[i]?.upstream?.[GS?.[state?.group]])?"upsON":"upsOFF"}>{i}</div>)}
            </div>
        </>
    );
};

export default Dashboard;