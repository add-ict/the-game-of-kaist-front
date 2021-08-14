import React, {useEffect, useState} from 'react';
import "./Dashboard.scss"
import {useSelector} from "react-redux";

const Dashboard = ({adminDB,DBref}) => {
    const [DB,setDB] = useState({})
    const {timer, gameState} = useSelector(state => ({
        timer: state.publicDB.time,
        gameState: state.publicDB.gameState,
    }));
    useEffect(()=>{
        adminDB?.on("value",snapshot=>{
            setDB(snapshot.val())
        })
    },[adminDB])
    return (
        <>
            <br/>
            <br/>
            <h1>Dashboard</h1>
            <button id="buttonIM" className={DB?.CKPT2 ? "show" : null} onClick={()=>{
                adminDB.update({CKPT2:false});
            }}>Approve</button>
            <br/>
            <div>{timer}s<br/> state:{gameState}</div>
            <br/>
            <button onClick={()=>{
                adminDB.update({Tm:5000});
            }}>T-5s</button>
            <button onClick={()=>{
                adminDB.update({Tm:60000});
            }}>T-1m</button>
            <button onClick={()=>{
                adminDB.update({Tm:-60000});
            }}>T+1m</button>
            <button onClick={()=>{
                adminDB.update({Tm:-5000});
            }}>T+5s</button>
        </>
    );
};

export default Dashboard;