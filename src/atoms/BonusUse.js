import React, {useState} from "react";
import "./BonusUse.scss"
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
        <label htmlFor="inputR">R: </label><input id="inputR" value={R} onChange={res=>{setR(parseInt(res.target.value)?parseInt(res.target.value):0)}}/><br/><br/>
        <label htmlFor="inputG">G: </label><input id="inputG" value={G} onChange={res=>{setG(parseInt(res.target.value)?parseInt(res.target.value):0)}}/><br/><br/>
        <label htmlFor="inputH">H: </label><input id="inputH" disabled value={B-(R+G)}/><br/><br/>
        <button onClick={()=>{if(valid()) dataRef.child("class").child(classID).child("upstream/BONUS_USE").update({R:R,G:G,H:B-(R+G)});}} disabled={!valid()}>Submit</button>
    </div>
    else
    return <div className="BonusUse">
        <div className="BonusUse__title" >{downstream?.title?.[t]}</div>
        <div>{JSON.stringify(result)}</div>
    </div>
};

export default BonusUse;