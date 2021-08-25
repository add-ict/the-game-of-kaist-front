import React from 'react';
import "./Timer.scss"

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

const Timer = ({state,timer,t}) => {
    return (
        <div className="timerContainer">
            <div style={{"fontSize":"1vh"}}>{groupName?.[state?.group]?.[t]}</div>
            <div>{(100 + Math.floor(timer.time / 60)).toString().substring(1, 3)}:{(100 + timer.time % 60).toString().substring(1, 3)}</div>
        </div>
    );
};

export default Timer;