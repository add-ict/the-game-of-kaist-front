import React, {useEffect, useState} from "react";
import "./Result.scss"
const Col = ({A,B}) => {
    return <div><div>{B}</div>{A?.map((x,i)=><div>{i}반: {x}등</div>)}</div>
}
const Result = ({data,dataRef,admin,classID,t}) => {
    const A = [data?.ranking?.R,data?.ranking?.G,data?.ranking?.H,data?.RESULT?.allRanking];
    const B = ["R","G","H","A"];
    return <div>
        <h1>Result(To Be Designed)</h1><br/>
        <div style={{"display":"flex",justifyContent: "space-around"}}>
            {A.map((x,i)=><Col A={x} B={B[i]}/>)}
        </div>
    </div>
}
export default Result;