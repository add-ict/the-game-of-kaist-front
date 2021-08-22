import React from 'react';

const groupName = {
    [-1]:["일시정지", ""],
    0:["캐릭터 선택", ""],
    1:["이동", ""],
    2:["미니게임", ""],
    3:["시즌 선택", ""],
    4:["시즌 사용", ""],
    5:["학과 선택", ""],
    6:["학과 효과 적용", ""],
    7:["보너스 분배", ""],
    8:["결과", ""],
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