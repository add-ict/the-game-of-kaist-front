import React, { useState} from "react";
import "./Last.scss"
const Last2 = ({data,dataRef,admin,classID,t}) => {
    const result = data?.["class"]?.[classID]?.upstream?.LAST_SELECT;
    const downstream = data?.["class"]?.[classID]?.downstream?.LAST_USE;
    if(admin) dataRef.child("class").child(classID).child("upstream/LAST_USE").set("NoChoice");
    return (
        <div className="Last">
            <div className="Last__title">
                <div className="Last__desc">
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
            <div className="Last__inner">
                {downstream?.desc?.[t]?.split("\n")?
                    downstream?.desc?.[t]?.split("\n")?.map((x,i)=>{
                            if (i==0) return <span>{x}</span>
                            return <span>{x}</span>
                        }
                    )
                    :null}
            </div>

        </div>
    );
}

export default Last2;