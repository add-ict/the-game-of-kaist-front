import React, {useState} from "react";
import "./BonusUse.scss"
import {InputNumber} from "antd";
const BonusUse = ({data,dataRef,admin,classID,t})=>{
    const result = data?.["class"]?.[classID]?.upstream?.BONUS_USE;
    const B = data?.["class"]?.[classID]?.score?.B?.value
    const downstream = data?.["class"]?.[classID]?.downstream?.BONUS_USE;
    const [R,setR] = useState(0);
    const [G,setG] = useState(0);
    const valid = ()=>{
        if (R===G&&G===B&&B===0) return true
        if (R>=0&&G>=0&&B-(R+G)>=0) return true
        if (R<=0&&G<=0&&B-(R+G)<=0) return true
        return false
    }
    if(admin&&!result)
    return <div className="BonusUse">
        <div className="BonusUse__title" >{downstream?.title?.[t]}</div>
        <label htmlFor="inputR">R: </label><InputNumber id="inputR" size="small" value={R} onChange={v=>setR(v)} /><br/><br/>
        <label htmlFor="inputG">G: </label><InputNumber id="inputG" size="small" value={G} onChange={v=>setG(v)} /><br/><br/>
        <label htmlFor="inputH">H: </label><InputNumber id="inputH" size="small" value={B-(R+G)} disabled /><br/><br/>
        <button onClick={()=>{if(valid()) dataRef.child("class").child(classID).child("upstream/BONUS_USE").update({R:R,G:G,H:B-(R+G)});}} disabled={!valid()}>Submit</button>
    </div>
    else
    return <div className="BonusUse">
        <div className="BonusUse__title" >{downstream?.title?.[t]}</div>
        <div style={{"fontSize":"7vh"}}>
            <div className="R">R: {result?.R}</div>
            <div className="G">G: {result?.G}</div>
            <div className="H">H: {result?.H}</div>
            <br/>
            <div>Who's the Winner?</div>
        </div>
    </div>
};

export default BonusUse;