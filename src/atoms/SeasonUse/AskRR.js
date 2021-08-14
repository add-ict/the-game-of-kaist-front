import React, {useEffect, useState} from "react";
import "./index.scss"

const AskRR = ({ onSubmit, noB }) => {
    const [ret, setRet] = useState({RGHB1:"Relation",RGHB2:"Relation"});
    let RGHB;
    if (noB) RGHB=["Relation","Grades","Health"];
    else RGHB=["Relation","Grades","Health","Bonus"];
    const [submit, setSubmit] = useState(false);
    if (!onSubmit) onSubmit=x=>{console.log("AskRR",x)}
    return (
        <div id="askContainer" className={submit?"submittedAskContainer":null}>
            <div>
                <p>본인 팀 원하는 두 스탯을 서로 교환</p>
                <select value={ret.RGHB1} onChange={x=>setRet(prev=>{return {...prev,RGHB1:x.target.value}})}>
                    {RGHB.map((x,i)=><option key={x} value={x}>{x}</option>)}
                </select>⇌
                <select value={ret.RGHB2} onChange={x=>setRet(prev=>{return {...prev,RGHB2:x.target.value}})}>
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
export default AskRR;