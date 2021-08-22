import React, { useState} from "react";
import "./SeasonSelect.scss"

const SeasonSelect = ({data,dataRef,admin,classID,t}) => {
    const result = data?.["class"]?.[classID]?.upstream?.SEASON_SELECT;
    const downstream = data?.["class"]?.[classID]?.downstream?.SEASON_SELECT;
    const [s,setS] = useState(-1);
    if (admin&&!result)
        return (
            <div className="SeasonSelect--container">
                <div className="SeasonSelect--container__title">
                    <div className="SeasonSelect--container__desc">
                        {downstream?.title?.[t]?.split("\n")?
                            downstream?.title?.[t]?.split("\n").map((x,i)=>{
                                    if (i==0) return <span>{x}</span>
                                    return <span><br/>{x}</span>
                                }
                            )
                            :null}
                    </div>
                </div>
                <div className={"SeasonSelect--container__innerAdmin"}>
                    {Array(3).fill(0).map((y,j)=>(
                        <div
                        className={"SeasonSelect--container__selectAdmin"+(s===j?"S":"")}
                        onClick={()=>{setS(j)}}
                    >
                            <div className="SeasonSelect--container__selectImg"></div>
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
                    {Array(3).fill(0).map((y,j)=>(
                        <div
                            className={"SeasonSelect--container__select"+(result?.result===j?"S":"")}
                        >
                            <div className="SeasonSelect--container__selectImg"></div>
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