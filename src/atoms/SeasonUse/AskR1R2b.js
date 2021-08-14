import React, {useEffect, useState} from "react";
import "./index.scss"
const RGHB=["Relation","Grades","Health","Bonus"];
const AskR1R2b = ({ title, onSubmit}) => {
    const [ret, setRet] = useState({RGHB1:"Relation",RGHB2:"Relation",isBigdeal:false});
    const [submit, setSubmit] = useState(false);
    if (!onSubmit) onSubmit=x=>{console.log("AskRR",x)}
    return (
        <div id="askContainer" className={submit?"submittedAskContainer":null}>
            <div>
                <p>{title}</p>
                희생: <select value={ret.RGHB1} onChange={x=>setRet(prev=>{return {...prev,RGHB1:x.target.value}})}>
                    {RGHB.map((x,i)=><option key={x} value={x}>{x}</option>)}
                </select><br />
               얻기:  <select value={ret.RGHB2} onChange={x=>setRet(prev=>{return {...prev,RGHB2:x.target.value}})}>
                    {RGHB.map((x,i)=><option key={x} value={x}>{x}</option>)}
                </select><br/>
                <select value={ret.isSteal} onChange={x=>setRet(prev=>{return {...prev,isBigdeal:x.target.value}})}>
                    <option value={false}>10을 내고 20받기</option>
                    <option value={true}>20을 내고 30받기</option>
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
export default AskR1R2b;