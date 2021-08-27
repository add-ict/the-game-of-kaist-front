import React, { useState} from "react";
import "./LastSelect.scss"

const LastSelect = ({data,dataRef,admin,classID,t}) => {
    const result = data?.["class"]?.[classID]?.upstream?.LAST_SELECT;
    const downstream = data?.["class"]?.[classID]?.downstream?.LAST_SELECT;
    const [s,setS] = useState(-1);
    if (admin&&!result)
        return (
            <div className="LastSelect--container">
                <div className="LastSelect--container__title">
                    {downstream?.title?.[t]}
                </div>
                <div className={"LastSelect--container__innerAdmin"}>
                    {Array(3).fill(0).map((y,j)=><div
                        className={"LastSelect--container__selectAdmin"+(s===j?"S":"")}
                        onClick={()=>{setS(j)}}
                    >
                        <div className="LastSelect--container__selectTitle">{downstream?.desc?.[j]?.[t]}</div>
                    </div>)}
                </div>
                <div className="LastSelect--container__button">
                    <div className="LastSelect--container__buttonInner"
                         onClick={()=>{
                             if(s!==-1) dataRef.child("class").child(classID).child("upstream/LAST_SELECT").update({result: s});
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
                </div>
                <div className={"LastSelect--container__inner"}>
                    {Array(3).fill(0).map((y,j)=><div
                        className={"LastSelect--container__select"+(result?.result===j?"S":"")}
                    >
                        <div className="LastSelect--container__selectTitle">{downstream?.desc?.[j]?.[t]}</div>
                    </div>)}
                </div>
                {admin?<div className="LastSelect--container__button">
                    <div className="LastSelect--container__buttonInner">Submit</div>
                </div>:null}
            </div>
        );
}
export default LastSelect;