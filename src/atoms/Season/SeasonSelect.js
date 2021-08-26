import React, { useState} from "react";
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
const SeasonSelect = ({data,dataRef,admin,classID,state,t}) => {
    const result = data?.["class"]?.[classID]?.upstream?.SEASON_SELECT;
    const downstream = data?.["class"]?.[classID]?.downstream?.SEASON_SELECT;
    const [s,setS] = useState(-1);
    if (admin&&!result)
        return (
            <div className="SeasonSelect--container">
                <div className="SeasonSelect--container__title">
                    <div className="SeasonSelect--container__desc">
                        {downstream?.title?.[t]?.split("\n")?
                            downstream?.title?.[t]?.split("\n")?.map((x,i)=>{
                                    if (i==0) return <span>{x}</span>
                                    return <span><br/>{x}</span>
                                }
                            )
                            :null}
                    </div>
                </div>
                <div className={"SeasonSelect--container__innerAdmin"}>
                    {Array(3).fill(0)?.map((y,j)=>(
                        <div
                        className={"SeasonSelect--container__selectAdmin"+(s===j?"S":"")}
                        onClick={()=>{setS(j)}}
                    >

                            <img className="SeasonSelect--container__selectImg" src={IMG?.[state?.turn]?.[j]}/>
                            <div className="SeasonSelect--container__selectText">
                                <div className="SeasonSelect--container__selectTitle">{downstream?.desc?.[j]?.[t]?.split("\n")?.[0]}</div>
                                <div className="SeasonSelect--container__selectDesc">{downstream?.desc?.[j]?.[t]?.split("\n")?.[1]}</div>
                                <div className="SeasonSelect--container__selectDesc">{downstream?.desc?.[j]?.[t]?.split("\n")?.[2]}</div>
                            </div>
                    </div>)
                    )}
                </div>
                <div className="SeasonSelect--container__button">
                    <div className="SeasonSelect--container__buttonInner"
                         onClick={()=>{
                             if(s!==-1) dataRef.child("class").child(classID).child("upstream/SEASON_SELECT").update({result: s});
                         }}
                    >Submit</div>
                </div>
            </div>
        );
    else
        return (
            <div className="SeasonSelect--container">
                <div className="SeasonSelect--container__title">
                    <div className="SeasonSelect--container__desc">
                        {downstream?.title?.[t]?.split("\n")?.[0]}<br/><br/>
                        {downstream?.title?.[t]?.split("\n")?.[1]}
                    </div>
                </div>
                <div className={"SeasonSelect--container__inner"}>
                    {Array(3).fill(0)?.map((y,j)=>(
                        <div
                            className={"SeasonSelect--container__select"+(result?.result===j?"S":"")}
                        >
                            <img className="SeasonSelect--container__selectImg" src={IMG?.[state?.turn]?.[j]}/>
                            <div className="SeasonSelect--container__selectText">
                                <div className="SeasonSelect--container__selectTitle">{downstream?.desc?.[j]?.[t]?.split("\n")?.[0]}</div>
                                <div className="SeasonSelect--container__selectDesc">{downstream?.desc?.[j]?.[t]?.split("\n")?.[1]}</div>
                                <div className="SeasonSelect--container__selectDesc">{downstream?.desc?.[j]?.[t]?.split("\n")?.[2]}</div>
                            </div>
                        </div>)
                    )}
                </div>
            </div>
        );

}
export default SeasonSelect;