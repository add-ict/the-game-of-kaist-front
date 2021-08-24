import React, { useState} from "react";
import "./Season.scss"
const Selected = ["선택한 반의 수: ",""];
const Season0x = ({data,dataRef,admin,classID,t,state}) => {
    const result = data?.["class"]?.[classID]?.upstream?.SEASON_SELECT;
    const downstream = data?.["class"]?.[classID]?.downstream?.SEASON_USE;
    return (
        <div className="Season">
            <div className="Season__title">
                <div className="Season__desc">
                    {downstream?.title?.[t]?.split("\n")?
                        downstream?.title?.[t]?.split("\n")?.map((x,i)=>{
                                if (i==0) return <span>{x}</span>
                                return <span><br/>{x}</span>
                            }
                        )
                        :null}
                    <br/>
                    <br/>
                </div>
            </div>
            <div className="Season__inner">
                {downstream?.desc?.[t]?.split("\n")?
                    downstream?.desc?.[t]?.split("\n")?.map((x,i)=>{
                            if (i==0) return <span>{x}</span>
                            return <span>{x}</span>
                        }
                    )
                    :null}
                {state.turn===2?(Selected?.[t]+downstream?.count):null}
            </div>
        </div>
    );
}

export default Season0x;