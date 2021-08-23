import React, {useEffect, useState} from "react";
import "./Result.scss"

const Result = ({data,dataRef,admin,classID,t}) => {
    const downstream = data?.RESULT;
    return <div>Result<br/>{JSON.stringify(downstream)}</div>
}
export default Result;