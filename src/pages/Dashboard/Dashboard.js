import React, {useState} from 'react';
import "./Dashboard.scss"
import {Button, InputNumber} from 'antd';
import {Link} from "react-router-dom";
import CHAR from "../../assets/char.png"
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
const groupName = {
    [-1]:["일시정지", "PAUSED"],
    0:["캐릭터 선택", "Character Selection"],
    1:["이동", "Move!"],
    2:["미니게임", "Mini Game"],
    3:["시즌 선택", "Season Selection"],
    4:["시즌 사용", "Season Application"],
    5:["학과 선택", "Department Selection"],
    6:["학과 효과 적용", "Department Effect"],
    7:["보너스 분배", "Bonus Distribution"],
    8:["결과", "Result"],
}

const turns = ["Turn 1", "Turn 2", "Fall 1",
    "Turn 4", "Turn 5", "Fall 2",
    "Turn 7", "Turn 8", "Spring 1",
    "Turn 10", "Turn 11", "Spring 2",
]
const Dashboard = ({data,dataRef,state,CKPT,ckptRef,timerRef,timer,reloadRef}) => {
    const [BM,setBM] = useState("");
    const [time,setTime] = useState(60);

    return (
        <div style={{"margin":"5vh"}} className="dashboard--container">
            <h1>Dashboard</h1>
            <Link to="/home">
                <Button>
                    Home
                </Button>
            </Link>
            <div style={{"display":"flex"}}>
                <div>
                    <h2>현재 상태</h2>
                    <div>{turns?.[state?.turn]}</div>
                    <div>{GS?.[state?.group]}</div>
                    <div>{groupName?.[state?.group]?.[0]},{groupName?.[state?.group]?.[1]}</div>
                    <div>남은 시간: {timer.time}</div>
                    <Button onClick={() => {
                        ckptRef.set(false)
                    }} disabled={!CKPT}>APPROVE
                    </Button>
                </div>

                <br/>
                <div>
                    <h2>시간 변경</h2>
                    <InputNumber defaultValue={60} onChange={v=>setTime(v)} />
                    <Button onClick={()=>{
                        timerRef.update({until: timer.until + time*1000})
                    }}>증감</Button>
                </div>
                <div>
                    <h2>선택 완료</h2>
                    <div style={{"display": "flex"}}>
                        {Array(5).fill(0).map((x, i) => <div
                            className={(!!data?.["class"]?.[i]?.upstream?.[GS?.[state?.group]]) ? "upsON" : "upsOFF"}>{i}</div>)}
                    </div>
                </div>
            </div>
            <div style={{"display":"flex"}}>
                <div>
                    <h2>시뮬레이션 용</h2>
                    <Button onClick={() => {
                        timerRef.update({until: 0, time: 0})
                    }}>SKIP TIME
                    </Button>
                    <Button onClick={() => {
                        reloadRef.set(Date.now()-5000);
                    }}>RELOAD ALL
                    </Button>
                </div>
                <div style={{"width":"60vh"}}>
                    <h2>브로드캐스트</h2>
                    <label>메시지: </label><input value={BM} onChange={res=>setBM(res.target.value)}/>
                    <Button onClick={()=>{
                        console.log()
                        for (let i;i<5;i++) {
                            dataRef.child("class").child(i).child("MESSAGE").push().set({
                                message: "Message from the head director",
                                description: BM,
                                life: Date.now()+3000
                            })
                        }
                        setBM("")
                    }}>Send</Button>
                </div>
                <img style={{"height":"30vh"}} src={CHAR}/>
            </div>
        </div>
    );
};

export default Dashboard;