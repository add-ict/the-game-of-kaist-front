import React, {useEffect, useState} from "react";
import "./Minigame.scss"
const selectTitle=[
    ["실패","Fail"],
    ["성공 1단계","Level 1"],
    ["성공 2단계","Level 2"],
]
const Arrow = ({RGHB,positionData,idx}) => {
    const value = positionData?.value?.[idx]?.[RGHB];
    if (!value) return null
    if (value > 0) return <span className={RGHB}>{(RGHB!=="K"?RGHB:"?")+"\u00A0↑\u00A0"+value}</span>
    else if (value < 0) return <span className={RGHB}>{(RGHB!=="K"?RGHB:"?")+"\u00A0↓\u00A0"+(-value)}</span>
}
const Minigame = ({mapData,data,dataRef,admin,classID,t}) => {
    const location = data?.["class"]?.[classID]?.map?.location;
    const result = data?.["class"]?.[classID]?.upstream?.MINIGAME;
    const [s,setS] = useState(-1);
    return (
        <div className="Minigame">
            <div className="Minigame__title">
                <b>{mapData?.[location]?.cause?.[t]}</b><br/>
                {mapData?.[location]?.desc?.[t]}<br/>
            </div>
            <div className="Minigame__select">
                {Array(3).fill(0).map((y,j)=><div
                    className={"Minigame__card"+
                    ((admin&&!result?s===j:result?.result===j)?" Minigame__cardS":"")+
                    (admin&&!result?" Minigame__clickable":"")}
                    onClick={
                        (admin&&!result?(()=>{setS(j)}):null)
                    }
                >
                    <div className="Minigame__selectTitle"> {selectTitle[j][t]}</div>
                    <div className="Minigame__selectFlex">{["R","G","H","B","K"].map((x,i)=><Arrow RGHB={x} positionData={mapData?.[location]} idx={j}/>)}</div>
                </div>)}
            </div>
            {admin&&!result?<div className="Minigame__button" onClick={()=>{
                if(s!==-1) dataRef.child("class").child(classID).child("upstream/MINIGAME").update({result: s});
            }}>Submit</div>:null}
        </div>
    );
}
export default Minigame;