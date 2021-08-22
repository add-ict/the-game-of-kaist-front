import React, { useState} from "react";
import Season0x from "./Season0x";
import Season1x from "./Season1x";
import Season32 from "./Season32";

const SeasonUse = ({state,data,dataRef,admin,classID,t}) => {
    const result = data?.["class"]?.[classID]?.upstream?.SEASON_SELECT?.result;
    switch (state?.turn) {
        case 11:
            if (result===2) return <Season32 data={data} dataRef={dataRef} admin={admin} t={t} classID={classID}/>
        case 2:
            return <Season0x data={data} dataRef={dataRef} admin={admin} t={t} classID={classID}/>
        case 5:
        case 8:
            return <Season1x data={data} dataRef={dataRef} admin={admin} t={t} classID={classID}/>
        default:
            return null;
    }
}

export default SeasonUse;