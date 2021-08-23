import React from 'react';

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

const Timer = ({state,timer,t}) => {
    return (
        <div id="timerContainer">
            <div>{groupName?.[state.group]?.[t]}</div>
            <div>{(100 + Math.floor(timer.time / 60)).toString().substring(1, 3)}:{(100 + timer.time % 60).toString().substring(1, 3)}</div>
        </div>
    );
};

export default Timer;