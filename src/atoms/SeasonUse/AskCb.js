import React, {useEffect, useState} from "react";
import "./index.scss"

const AskCb = ({ title, onSubmit}) => {
    const [ret, setRet] = useState({classID:0,isSteal:false});
    const [submit, setSubmit] = useState(false);
    if (!onSubmit) onSubmit=x=>{console.log("AskCb",x)}
    return (
        <div id="askContainer" className={submit?"submittedAskContainer":null}>
            <div>
                <p>{title}</p>
                <div>
                    <select value={ret.classID} onChange={x=>setRet(prev=>{return {...prev,classID:parseInt(x.target.value)}})}>
                        {Array(5).fill(0).map((x,i)=><option key={i} value={i}>{i}</option>)}
                    </select><br/>
                    <select value={ret.isSteal} onChange={x=>setRet(prev=>{return {...prev,isSteal:x.target.value}})}>
                        <option disabled value={false}>없애버리기(-40)</option>
                        <option value={true}>빼앗기(-40,+40)</option>
                    </select>
                </div>
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
export default AskCb;