import React, {useEffect, useState} from "react";
import "./Result.scss"
const toRank = (rank) => {
    const ret = []
    for (let i = 1; i <= 5; i++)
        for (let j = 0; j < 5; j++)
            if (rank?.[j] == i)
                ret.push([i, j])
    return ret
}
const Result = ({data,dataRef,admin,classID,t}) => {
    const A = [data?.ranking?.R,data?.ranking?.G,data?.ranking?.H,data?.RESULT?.allRanking];
    const B = ["R","G","H","A"];
    const RGH = "RGH";
    return (
        <div>
            <div id="gameContainer">
                <div className="result--container">
                    <div className="result--container__column" style={{"left":"4vh"}}>
                        {Array(5).fill(0).map((x,i)=>
                            <div className="result--container__cell">{(5-i)*20} pt</div>
                        )}
                    </div>
                    {Array(3).fill(0).map((y,j)=>
                        <div className="result--container__column" style={{"left":(18+20*j)+"vh"}}>
                            {toRank(data?.ranking?.[RGH[j]]).map((x,i)=>
                                <div className="result--container__cell">{x[0]}.
                                    <span style={{"marginLeft":"auto","fontSize":"1px","lineHeight":"2.8vh"}}>#</span>
                                    <span>{data?.["class"]?.[x[1]]?.name}</span>
                                    ({data?.["class"]?.[x[1]]?.["score"]?.[RGH[j]]?.value})</div>
                            )}
                        </div>
                    )}

                    <div className="result--container__column" style={{"left":"78vh"}}>
                        {toRank(data?.RESULT?.allRanking).map((x,i)=>
                            <div className="result--container__cell" style={{"color":"white"}}>{x[0]}.
                                <span style={{"marginLeft":"auto","fontSize":"1px","lineHeight":"2.8vh"}}>#</span>
                                <span>{data?.["class"]?.[x[1]]?.name}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Result;