import React, {useRef, useState} from "react";
import "./LastSelect.scss"
const screams=[
    [0,1,2],
    [0,2,1],
    [1,0,2],
    [1,2,0],
    [2,1,0],
    [2,0,1],
]
const LastSelect = ({data,dataRef,admin,classID,t}) => {
    const result = data?.["class"]?.[classID]?.upstream?.LAST_SELECT;
    const downstream = data?.["class"]?.[classID]?.downstream?.LAST_SELECT;
    const [s,setS] = useState(-1);
    const scream = useRef(Math.floor(Math.random()*6));
    return (
        <div className="LastSelect">
            <div className="LastSelect__title">
                {downstream?.title?.[t]?
                    downstream?.title?.[t]?.split("\n")?.map((x,i)=>{
                            if (i==0) return <span><b>{x}</b></span>
                            return <span><br/>{x}</span>
                        }
                    )
                    :null}
            </div>
            <div className="LastSelect__select">
                {screams[scream.current].map((j,y)=><div
                    className={"LastSelect__card"+
                    ((admin&&!result?s===j:result?.result===j)?" LastSelect__cardS":"")+
                    (admin&&!result?" LastSelect__clickable":"")}
                    onClick={
                        (admin&&!result?(()=>{setS(j)}):null)
                    }
                >
                    <div className="LastSelect__card-text">
                        {downstream?.desc?.[j]?.[t]}
                    </div>
                </div>)}
            </div>
            {admin&&!result?<div className="LastSelect__button" onClick={()=>{
                if(s!==-1) dataRef.child("class").child(classID).child("upstream/LAST_SELECT").update({result: s});
            }}>Submit</div>:null}
        </div>
    );
}
export default LastSelect;