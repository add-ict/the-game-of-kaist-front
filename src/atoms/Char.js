import React from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Img0 from "../assets/character/0.png"
import Img1 from "../assets/character/1.png"
import Img2 from "../assets/character/2.png"
import Img3 from "../assets/character/3.png"
import Img4 from "../assets/character/4.png"
import Img5 from "../assets/character/5.png"

const Img = [Img0,Img1,Img2,Img3,Img4,Img5]

export const charList = {
    0: {
        "Name": ["넙죽이","Neobjuggi"],
        "Description": ["KAIST의 표준","Standard of KAIST"]
    },
    1: {
        "Name": ["거위","Goose"],
        "Description": ["거위는 사람을 물어","Goose bites people."]
    },
    2: {
        "Name": ["고양이","Cat"],
        "Description": ["귀엽지만 안 씻음","Cute but dirty"]
    },
    3: {
        "Name": ["휴보","HUBO"],
        "Description": ["감정은 어렵고 나는 똑똑해","Difficult emotion, smart\u00A0me"]
    },
    4: {
        "Name": ["OLEV","OLEV"],
        "Description": ["애는 착해","It is good but..."]
    },
    5: {
        "Name": ["오리","Duck"],
        "Description": ["오리는 똑똑해","Duck on Dean’s list"]
    }
}
const ToolTip = ({admin,onClick}) => {
    if (!admin) return null;
    return (
        <div id="charSelect">
            {Array(6).fill(0).map((x, i) =>
                <div><img key={i} src={Img[i]} onClick={()=>{onClick(i)}}/></div>)}
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
            <div className="charContainer">
                <div className="charContainer__name">{charList[pChar]?.Name?.[t]}</div>
                <img alt="character" src={Img[pChar]}/>
                <div className="charContainer__desc">{charList[pChar]?.Description?.[t]}</div>
            </div>
        </Tippy>
    );
};

export default Char;