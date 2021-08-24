import React, {useEffect, useRef, useState} from 'react';
import "./Game.scss"
import Timer from "./Timer";
import Turns from "./Turns";
import Score from "./Score"
import Char from "./Char"
import Ranking from "./Ranking"
import Deck from "./Deck"
import Conditional from "./Conditional";
import Language from "./Language";
import {notification} from "antd";
import Result from "./Result";
const Game = ({classID, admin,rootRef,CKPT, data, prev, timer, state, mapData, dataRef}) => {
    const [t,setT] = useState(0);
    const messageList = useRef([]);
    useEffect(()=>{
        const messages = data?.class?.[classID]?.MESSAGE;
        for (const id in messages) {
            if (!messageList.current.includes(id)) {
                console.log("M#SG",id)
                messageList.current.push(id);
                if(messages[id].life>Date.now())
                    notification.open({
                        message: messages[id].message,
                        description: messages[id].description,
                        onClick: () => {
                            console.log('Notification Clicked!');
                        },
                        zIndex: 9999,
                    });
            }
        }
    },[data]);
    if (!data) return <div><br/>
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>;
    else if(state?.group===8) return <Result data={data} dataRef={dataRef} admin={admin} t={t} classID={classID}/>;
    else
        return (
            <div id="gameContainer">
                <div id="leftSide">
                    <div id="tempBG"/>
                    <Language t={t} setT={setT} />
                    <Timer rootRef={rootRef} timer={timer} state={state} t={t}/>
                    <Deck rootRef={rootRef} data={data} classID={classID}/>
                    <Turns rootRef={rootRef} state={state}/>

                    <Score rootRef={rootRef} data={data} prev={prev} classID={classID}/>
                    <Char admin={admin} data={data} classID={classID} dataRef={dataRef} t={t}/>
                    <Ranking classID={classID} rootRef={rootRef} data={data} prev={prev}/>
                </div>
                <Conditional id="rightSide" admin={admin} data={data} prev={prev} timer={timer} state={state} mapData={mapData} classID={classID} rootRef={rootRef} dataRef={dataRef} t={t}/>
            </div>
        );
};

export default Game;
