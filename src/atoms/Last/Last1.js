import React, { useState} from "react";
import "./LastSelect.scss"
const RGH="RGH"
const Last1 = ({data,dataRef,admin,classID,t}) => {
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
                        <div className="LastSelect--container__selectTitle"><span className={RGH[j]}>{RGH[j]}</span></div>
                    </div>)}
                </div>
                <div className="LastSelect--container__button">
                    <div className="LastSelect--container__buttonInner"
                         onClick={()=>{
                             if(s!==-1) dataRef.child("class").child(classID).child("upstream/LAST_USE").update({RGHB:RGH[s]});
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
                        className={"LastSelect--container__select"+(result?.RGHB===RGH[j]?"S":"")}
                    >
                        <div className="LastSelect--container__selectTitle"><span className={RGH[j]}>{RGH[j]}</span></div>
                    </div>)}
                </div>
                {admin?<div className="LastSelect--container__button">
                    <div className="LastSelect--container__buttonInner">Submit</div>
                </div>:null}
            </div>
        );
}
export default Last1;