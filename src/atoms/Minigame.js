import React, {useEffect, useState} from "react";
import "./Minigame.scss"
const selectTitle=[
    ["실패","Fail"],
    ["성공 1단계","Level 1"],
    ["성공 2단계","Level 2"],
]
const Arrow = ({RGHB,positionData,idx}) => {
    const value = positionData?.value?.[idx]?.[RGHB];
    let ret="0"
    if(value>0) ret="↑"+value
    else if(value<0) ret="↓"+(-value)
    if (value==0) return null
    return <div className={"Minigame--container__selectValue "+RGHB}>{ret}</div>
};
const Minigame = ({mapData,data,dataRef,admin,classID,t}) => {
    const location = data?.["class"]?.[classID]?.map?.location;
    const result = data?.["class"]?.[classID]?.upstream?.MINIGAME;
    const [s,setS] = useState(-1);
    if (admin&&!result)
        return (
            <div className="Minigame--container">
                <div className="Minigame--container__title">
                    <div className="Minigame--container__cause">{mapData?.[location]?.cause?.[t]}</div>
                    <div className="Minigame--container__desc">{mapData?.[location]?.desc?.[t]}</div>
                </div>
                <div className={"Minigame--container__innerAdmin"}>
                    {Array(3).fill(0).map((y,j)=><div
                        className={"Minigame--container__selectAdmin"+(s===j?"S":"")}
                        onClick={()=>{setS(j)}}
                    >
                        <div className="Minigame--container__selectTitle">{selectTitle[j][t]}</div>
                        {"RGHB".split("").map((x,i)=><Arrow positionData={mapData?.[location]} RGHB={x} idx={j}/>)}
                    </div>)}
                </div>
                <div className="Minigame--container__button">
                    <div className="Minigame--container__buttonInner"
                    onClick={()=>{
                        if(s!==-1) dataRef.child("class").child(classID).child("upstream/MINIGAME").update({result: s});
                    }}
                    >Submit</div>
                </div>
            </div>
        );
    else
        return (
            <div className="Minigame--container">
                <div className="Minigame--container__title">
                    <div className="Minigame--container__cause">{mapData?.[location]?.cause?.[t]}</div>
                    <div className="Minigame--container__desc">{mapData?.[location]?.desc?.[t]}</div>
                </div>
                <div className={"Minigame--container__inner"}>
                    {Array(3).fill(0).map((y,j)=><div
                        className={"Minigame--container__select"+(result?.result===j?"S":"")}
                    >
                        <div className="Minigame--container__selectTitle">{selectTitle[j][t]}</div>
                        {"RGHB".split("").map((x,i)=><Arrow positionData={mapData?.[location]} RGHB={x} idx={j}/>)}
                    </div>)}
                </div>
                {admin?<div className="Minigame--container__button">
                    <div className="Minigame--container__buttonInner">Submit</div>
                </div>:null}
            </div>
        );
}
export default Minigame;