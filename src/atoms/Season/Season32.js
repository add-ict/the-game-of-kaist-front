import React, { useState} from "react";
import "./Season.scss"
const Season32 = ({data,dataRef,admin,classID,t}) => {
    const result = data?.["class"]?.[classID]?.upstream?.SEASON_USE;
    const downstream = data?.["class"]?.[classID]?.downstream?.SEASON_USE;
    const [xx,setXx] = useState(-1);
    const [s,setS] = useState(-1);
    if(admin&&!result)
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
                <div className="Season__innerAdmin32">
                    {downstream?.desc?.[t]?.split("\n")?
                        downstream?.desc?.[t]?.split("\n")?.map((x,i)=>{
                                if (i==0) return <span>{x}</span>
                                return <span>{x}</span>
                            }
                        )
                        :null}
                    <div className="Season__ClassSelect">
                        {Array(3).fill(0)?.map((x,i)=><div className={"Season__ClassButtonAdmin"+(xx===i?"S":"")+" small"}
                                                          onClick={()=>{setXx(i)}}
                        >
                            {i+1}
                        </div>)}
                    </div>
                    <div className="Season__ClassSelect">
                        {Array(5).fill(0)?.map((x,i)=><div className={"Season__ClassButton"+(i!=classID?"Admin":"AdminME")+(s===i?"S":"")}
                                                          onClick={()=>{if(i!=classID) setS(i)}}
                        >{data?.["class"]?.[i]?.name}</div>)}
                    </div>
                </div>
                <div className="Season__button">
                    <div className="Season__buttonInner"
                         onClick={()=>{
                             if(s!==-1&&xx!==-1) dataRef.child("class").child(classID).child("upstream/SEASON_USE").update({x: xx, classID:s});
                         }}
                    >Submit</div>
                </div>
            </div>
        );
    else
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
                <div className="Season__inner32">
                    {downstream?.desc?.[t]?.split("\n")?
                        downstream?.desc?.[t]?.split("\n")?.map((x,i)=>{
                                if (i==0) return <span>{x}</span>
                                return <span>{x}</span>
                            }
                        )
                        :null}
                    <div className="Season__ClassSelect">
                        {Array(3).fill(0)?.map((x,i)=><div className={"Season__ClassButton"+(result?.x===i?"S":"")+" small"}
                        >
                            {i+1}
                        </div>)}
                    </div>
                    <div className="Season__ClassSelect">
                        {Array(5).fill(0)?.map((x,i)=><div className={"Season__ClassButton"+(i!=classID?"":"ME")+(result?.classID===i?"S":"")}
                        >{data?.["class"]?.[i]?.name}</div>)}
                    </div>
                </div>
            </div>
        );
}

export default Season32;
