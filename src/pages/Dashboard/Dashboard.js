import React, {useEffect, useState} from 'react';
import "./Dashboard.scss"

const Dashboard = ({rootRef,CKPT,ckptRef}) => {
    const [ups,setUps] = useState([false,false,false,false,false]);
    return (
        <>
            <br/>
            <br/>
            <h1>Dashboard</h1>
            {CKPT?<button onClick={()=>{ckptRef.set(false)}}>APPROVAL</button>:null}
            <div style={{"display":"flex"}}>
                {Array(5).fill(0).map((x,i)=><div className={ups[i]?"upsON":"upsOFF"}>{i}</div>)}
            </div>

        </>
    );
};

export default Dashboard;