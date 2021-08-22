import React, { useState} from "react";
import "./LastSelect.scss"
const RGH="RGH"
const L=[
    [<span><span className="R">R</span>↔<span className="G">G</span></span>,""],
    [<span><span className="G">G</span>↔<span className="H">H</span></span>,""],
    [<span><span className="H">H</span>↔<span className="R">R</span></span>,""],

]
const Last0 = ({data,dataRef,admin,classID,t}) => {
    const result = data?.["class"]?.[classID]?.upstream?.LAST_USE;
    const downstream = data?.["class"]?.[classID]?.downstream?.LAST_USE;
    const [s,setS] = useState(-1);
    if (admin&&!result)
        return (
            <div className="LastSelect--container">
                <div className="LastSelect--container__title">
                    {downstream?.title?.[t]}
                    <br/>
                    {downstream?.desc?.[t]}
                </div>
                <div className={"LastSelect--container__innerAdmin"}>
                    {Array(3).fill(0).map((y,j)=><div
                        className={"LastSelect--container__selectAdmin"+(s===j?"S":"")}
                        onClick={()=>{setS(j)}}
                    >
                        <div className="LastSelect--container__selectTitle">{L[j][t]}</div>
                    </div>)}
                </div>
                <div className="LastSelect--container__button">
                    <div className="LastSelect--container__buttonInner"
                         onClick={()=>{
                             if(s===0) dataRef.child("class").child(classID).child("upstream/LAST_USE").update({RGHB1:"R",RGHB2:"G"});
                             else if(s===1) dataRef.child("class").child(classID).child("upstream/LAST_USE").update({RGHB1:"G",RGHB2:"H"});
                             else if(s===2) dataRef.child("class").child(classID).child("upstream/LAST_USE").update({RGHB1:"H",RGHB2:"R"});
                         }}
                    >Submit</div>
                </div>
            </div>
        );
    else
        return (
            <div className="LastSelect--container">
                <div className="LastSelect--container__title">
                    {downstream?.title?.[t]}
                    <br/>
                    {downstream?.desc?.[t]}
                </div>
                <div className={"LastSelect--container__inner"}>
                    {Array(3).fill(0).map((y,j)=><div
                        className={"LastSelect--container__select"+(result?.RGHB1===RGH[j]?"S":"")}
                    >
                        <div className="LastSelect--container__selectTitle">{L[j][t]}</div>
                    </div>)}
                </div>
                {admin?<div className="LastSelect--container__button">
                    <div className="LastSelect--container__buttonInner">Submit</div>
                </div>:null}
            </div>
        );
}
export default Last0;