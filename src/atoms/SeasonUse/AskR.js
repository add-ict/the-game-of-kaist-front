import React, {useEffect, useState} from "react";
import "./index.scss"
const AskR = ({ title,onSubmit,noB }) => {
    let RGHB;
    if (noB) RGHB=["Relation","Grades","Health"];
    else RGHB=["Relation","Grades","Health","Bonus"];
    const [ret, setRet] = useState({RGHB:"Relation"});
    const [submit, setSubmit] = useState(false);
    if (!onSubmit) onSubmit=x=>{console.log("AskR",x)}
    return (
        <div id="askContainer" className={submit?"submittedAskContainer":null}>
            <div>
                <p>{title}</p>
                <select value={ret.RGHB} onChange={x=>setRet({RGHB:x.target.value})}>
                    {RGHB.map((x,i)=><option key={x} value={x}>{x}</option>)}
                </select>
            </div>
            <button onClick={() => {
                if (!submit) onSubmit(ret);
                setSubmit(true)
            }}>
                <div>Submit</div>
            </button>
        </div>
    );
}
export default AskR;