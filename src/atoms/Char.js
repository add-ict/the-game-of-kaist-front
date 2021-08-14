import React from "react";
import {useSelector} from "react-redux";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export const charList = {
    0: {
        "Name": "넙죽이",
        "Img": "https://i.imgur.com/1fbViqP.png",
        "Description": "카이스트의 대표"
    },
    1: {
        "Name": "거위",
        "Img": "https://i.imgur.com/kM6WV4h.png",
        "Description": "사람을 무는 새"
    },
    2: {
        "Name": "고양이",
        "Img": "https://i.imgur.com/2WLwQe4.png",
        "Description": "귀엽지만 안씻음"
    },
    3: {
        "Name": "휴보",
        "Img": "https://i.imgur.com/piPTej0.png",
        "Description": "전자두뇌"
    },
    4: {
        "Name": "OLEV",
        "Img": "https://i.imgur.com/sJmIryp.png",
        "Description": "꼬마 버스"
    },
    5: {
        "Name": "오리",
        "Img": "https://i.imgur.com/DS58asH.png",
        "Description": "머리 좋음"
    }
}
const ToolTip = ({updater}) => {
    if (!updater) return null;
    return (
        <div id="charSelect">
            {Array(6).fill(0).map((x, i) =>
                <div key={i} style={{"backgroundImage": `url(${charList[i].Img})`}}
                     onClick={
                         ()=>updater("character")(i)
                     }></div>)}
        </div>
    );
}
const Char = ({updater}) => {
    const {pChar} = useSelector(state => ({
        pChar: state.privateDB?.character,
    }));
    return (
        <Tippy content={<ToolTip updater={updater}/>} interactive={true} placement="bottom" disabled={!updater}>
            <div id="charContainer">
                <div>{charList[pChar]?.Name}</div>
                <img alt="character" src={charList[pChar]?.Img}/>
                <div>{charList[pChar]?.Description}</div>
            </div>
        </Tippy>
    );
};
export default Char;