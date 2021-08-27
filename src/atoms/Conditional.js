import React, {useEffect, useMemo, useState} from "react";
import Map from "./Map";
import Result from "./Result";
import Minigame from "./Minigame";
import SeasonSelect from "./Season/SeasonSelect";
import "./Conditional.scss"
import LastSelect from "./Last/LastSelect";
import mapIcon from "../assets/mapIcon.png"
import SeasonUse from "./Season/SeasonUse";
import LastUse from "./Last/LastUse";
import BonusUse from "./BonusUse";


const MOVEMENT = 1;
const MINIGAME = 2;
const SEASON_SELECT = 3;
const SEASON_USE = 4;
const LAST_SELECT = 5;
const LAST_USE = 6;
const BONUS_USE = 7;
const RESULT = 8;


const Conditional = ({mapData,state,dataRef,data,classID,admin,t}) => {
    const [showMap,setShowMap] = useState(false);
    const Component=useMemo(()=>{
        if(!state) return <Map state={state} mapData={mapData} dataRef={dataRef} data={data} classID={classID} admin={admin} t={t}/>;
        switch(state.group) {
            case MINIGAME:
                return <Minigame mapData={mapData} data={data} dataRef={dataRef} admin={admin} t={t} classID={classID}/>;
            case SEASON_SELECT:
                return <SeasonSelect state={state} data={data} dataRef={dataRef} admin={admin} t={t} classID={classID}/>;
            case SEASON_USE:
                return <SeasonUse state={state} data={data} dataRef={dataRef} admin={admin} t={t} classID={classID}/>;
            case LAST_SELECT:
                return <LastSelect data={data} dataRef={dataRef} admin={admin} t={t} classID={classID}/>;
            case LAST_USE:
                return <LastUse data={data} dataRef={dataRef} admin={admin} t={t} classID={classID}/>;
            case BONUS_USE:
                return <BonusUse data={data} dataRef={dataRef} admin={admin} t={t} classID={classID}/>;
            default:
                return <Map state={state} mapData={mapData} dataRef={dataRef} data={data} classID={classID} admin={admin} t={t}/>;
        }
    });
    useEffect(()=>{if(state.state===0) setShowMap(false);},[state.state]);
    if (state?.turn!==12&&(state?.group===0 || state?.group===1 || !(state?.state===2 || state?.state===3))) return <Map state={state} mapData={mapData} dataRef={dataRef} data={data} classID={classID} admin={admin} t={t}/>;
    else {
        return (
            <>
                {showMap ?
                    <Map state={state} mapData={mapData} dataRef={dataRef} data={data} classID={classID} admin={admin}
                         t={t}/> :
                    <div className="Conditional wmp">
                        <div className="Conditional__inner">
                            {Component}
                        </div>
                    </div>
                }
                <img className="Conditional__Button" src={mapIcon} alt={"button show map"} onClick={()=>{setShowMap(prev=>!prev)}}/>
            </>

        );
    };
};
export default Conditional;