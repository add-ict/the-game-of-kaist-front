import React, {useRef, useState} from "react";
import "./SeasonSelect.scss"

import IMG0 from "../../assets/season/1.jpg";
import IMG1 from "../../assets/season/2.jpg";
import IMG2 from "../../assets/season/3.jpg";

import IMG3 from "../../assets/season/4.jpg";
import IMG4 from "../../assets/season/5.jpg";
import IMG5 from "../../assets/season/6.jpg";

import IMG6 from "../../assets/season/7.jpg";
import IMG7 from "../../assets/season/8.jpg";
import IMG8 from "../../assets/season/9.jpg";

import IMG9 from "../../assets/season/10.jpg";
import IMG10 from "../../assets/season/11.jpg";
import IMG11 from "../../assets/season/12.jpg";
const IMG={
    2: [IMG0,IMG1,IMG2],
    5: [IMG3,IMG4,IMG5],
    8: [IMG6,IMG7,IMG8],
    11: [IMG9,IMG10,IMG11],
}
const screams=[
    [0,1,2],
    [0,2,1],
    [1,0,2],
    [1,2,0],
    [2,1,0],
    [2,0,1],
]
const SeasonSelect = ({data,dataRef,admin,classID,state,t}) => {
    const result = data?.["class"]?.[classID]?.upstream?.SEASON_SELECT;
    const downstream = data?.["class"]?.[classID]?.downstream?.SEASON_SELECT;
    const [s,setS] = useState(-1);
    const scream = useRef(Math.floor(Math.random()*6));
    return (
        <div className="SeasonSelect">
            <div className="SeasonSelect__title">
                {downstream?.title?.[t]?
                    downstream?.title?.[t]?.split("\n")?.map((x,i)=>{
                            if (i==0) return <span><b>{x}</b></span>
                            return <span><br/>{x}</span>
                        }
                    )
                    :null}
            </div>
            <div className="SeasonSelect__select">
                {screams[scream.current].map((j,y)=><div
                    className={"SeasonSelect__card"+
                    ((admin&&!result?s===j:result?.result===j)?" SeasonSelect__cardS":"")+
                    (admin&&!result?" SeasonSelect__clickable":"")}
                    onClick={
                        (admin&&!result?(()=>{setS(j)}):null)
                    }
                >
                    <img className="SeasonSelect__Img" src={IMG?.[state?.turn]?.[j]}/>
                    <div className="SeasonSelect__card-text">
                        {downstream?.desc?.[j]?.[t]?
                            downstream?.desc?.[j]?.[t]?.split("\n")?.map((x,i)=>{
                                    if (i==0) return <span><b>{x}</b></span>
                                    return <span><br/>{x}</span>
                                }
                            )
                            :null}
                    </div>
                </div>)}
            </div>
            {admin&&!result?<div className="SeasonSelect__button" onClick={()=>{
                if(s!==-1) dataRef.child("class").child(classID).child("upstream/SEASON_SELECT").update({result: s});
            }}>Submit</div>:null}
        </div>
    );
}
export default SeasonSelect;