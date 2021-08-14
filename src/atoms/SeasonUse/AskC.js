import React, {useEffect, useState} from "react";
import "./index.scss"

const AskC = ({ title, onSubmit}) => {
    const [ret, setRet] = useState({classID:0});
    const [submit, setSubmit] = useState(false);
    if (!onSubmit) onSubmit=x=>{console.log("AskC",x)}

    return (
        <div id="askContainer" className={submit?"submittedAskContainer":null}>
            <div>
                <p>{title}</p>
                <select value={ret.classID} onChange={x=>setRet({classID:parseInt(x.target.value)})}>
                    {Array(5).fill(0).map((x,i)=><option key={i} value={i}>{i}</option>)}
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
export default AskC;