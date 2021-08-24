import React, { useState} from "react";
import Last0 from "./Last0";
import Last1 from "./Last1";
import Last2 from "./Last2";

const LastUse = ({data,dataRef,admin,classID,t}) => {
    const result = data?.["class"]?.[classID]?.upstream?.LAST_SELECT?.result;
    switch (result) {
        case 0:
            return <Last0 data={data} dataRef={dataRef} admin={admin} t={t} classID={classID}/>
        case 1:
            return <Last1 data={data} dataRef={dataRef} admin={admin} t={t} classID={classID}/>
        case 2:
            return <Last2 data={data} dataRef={dataRef} admin={admin} t={t} classID={classID}/>
        default:
            return <div>Error<br/>Report to Director<br/><br/>You did NOT select! :(</div>
    }
}

export default LastUse;