import React from 'react';
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
const groupName = {
    [-1]:["일시정지", "PAUSED"],
    0:["캐릭터 선택", "캐릭터 선택(TBT)"],
    1:["이동", "이동(TBT)"],
    2:["미니게임", "미니게임(TBT)"],
    3:["시즌 선택", "시즌 선택(TBT)"],
    4:["시즌 사용", "시즌 사용(TBT)"],
    5:["학과 선택", "학과 선택(TBT)"],
    6:["학과 효과 적용", "학과 효과 적용(TBT)"],
    7:["보너스 분배", "보너스 분배(TBT)"],
    8:["결과", "RESULT"],
}
const turns = ["Turn 1", "Turn 2", "Fall 1",
    "Turn 4", "Turn 5", "Fall 2",
    "Turn 7", "Turn 8", "Spring 1",
    "Turn 10", "Turn 11", "Spring 2",
]
const Dashboard = ({data,state,CKPT,ckptRef,timerRef,timer}) => {
    return (
        <>
            <br/>
            <br/>
            <h1>Dashboard</h1>
            <div>{turns?.[state?.turn]}</div>
            <div>{GS?.[state?.group]}</div>
            <div>{groupName?.[state?.group]?.[0]},{groupName?.[state?.group]?.[1]}</div>
            <div>{timer.time}</div>
            <button onClick={() => {
                ckptRef.set(false)
            }} disabled={!CKPT}>APPROVE
            </button>
            <br/>
            <button onClick={() => {
                timerRef.update({until: 0, time: 0})
            }}>SKIP TIME
            </button>
            <br/>
            <button onClick={() => {
                timerRef.update({until: timer.until - 5000})
            }}>-5s
            </button>
            <button onClick={() => {
                timerRef.update({until: timer.until + 5000})
            }}>+5s
            </button>
            <button onClick={() => {
                timerRef.update({until: timer.until + 60000})
            }}>+1min
            </button>
            <button onClick={() => {
                timerRef.update({until: timer.until + 300000})
            }}>+5min
            </button>
            <div style={{"display": "flex"}}>
                {Array(5).fill(0).map((x, i) => <div
                    className={(!!data?.["class"]?.[i]?.upstream?.[GS?.[state?.group]]) ? "upsON" : "upsOFF"}>{i}</div>)}
            </div>
            {data?.["class"]?.[0]?.downstream?.SEASON_USE?.count ? <div>
                <div>G: {data?.["class"]?.[0]?.downstream?.SEASON_USE?.count?.G} {Math.floor(data?.["class"]?.[0]?.downstream?.SEASON_USE?.count?.G)}</div>
                <div>H: {data?.["class"]?.[0]?.downstream?.SEASON_USE?.count?.H} {Math.floor(data?.["class"]?.[0]?.downstream?.SEASON_USE?.count?.H)}</div>
                <div>R: {data?.["class"]?.[0]?.downstream?.SEASON_USE?.count?.R} {Math.floor(data?.["class"]?.[0]?.downstream?.SEASON_USE?.count?.R)}</div>
            </div> : null}
        </>
    );
};

export default Dashboard;