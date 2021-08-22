import React from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export const charList = {
    0: {
        "Name": ["넙죽이",""],
        "Img": "https://i.imgur.com/1fbViqP.png",
        "Description": ["KAIST의 표준",""]
    },
    1: {
        "Name": ["거위",""],
        "Img": "https://i.imgur.com/kM6WV4h.png",
        "Description": ["거위는 사람을 물어",""]
    },
    2: {
        "Name": ["고양이",""],
        "Img": "https://i.imgur.com/2WLwQe4.png",
        "Description": ["귀엽지만 안 씻음",""]
    },
    3: {
        "Name": ["휴보",""],
        "Img": "https://i.imgur.com/piPTej0.png",
        "Description": ["감정은 어렵고 나는 똑똑해",""]
    },
    4: {
        "Name": ["OLEV",""],
        "Img": "https://i.imgur.com/sJmIryp.png",
        "Description": ["애는 착해",""]
    },
    5: {
        "Name": ["오리",""],
        "Img": "https://i.imgur.com/DS58asH.png",
        "Description": ["오리는 똑똑해",""]
    }
}
const ToolTip = ({admin,onClick}) => {
    if (!admin) return null;
    return (
        <div id="charSelect">
            {Array(6).fill(0).map((x, i) =>
                <div key={i} style={{"backgroundImage": `url(${charList[i].Img})`}}
                     onClick={()=>{onClick(i)}}></div>)}
        </div>
    );
}
const Char = ({admin,data,classID,dataRef,t}) => {
    const pChar = data?.["class"]?.[classID]?.character;
    console.log(data?.["class"]?.[classID])
    const onClick = (i)=>{
        dataRef.child("class").child(classID).update({character:i})
    }

    return (
        <Tippy content={<ToolTip admin={admin} onClick={onClick}/>} interactive={true} placement="bottom" disabled={!admin}>
            <div id="charContainer">
                <div>{charList[pChar]?.Name?.[t]}</div>
                <img alt="character" src={charList[pChar]?.Img}/>
                <div>{charList[pChar]?.Description?.[t]}</div>
            </div>
        </Tippy>
    );
};
export default Char;