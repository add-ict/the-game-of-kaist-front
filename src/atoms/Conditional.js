import React from "react";
import Map from "./Map";
import Result from "./Result";

const MOVEMENT = 1;
const MINIGAME = 2;
const SEASON_SELECT = 3;
const SEASON_USE = 4;
const LAST_SELECT = 5;
const LAST_USE = 6;
const BONUS_USE = 7;
const RESULT = 8;

const Conditional = ({mapData,state,dataRef,data,t}) => {
    return <Map state={state} mapData={mapData} dataRef={dataRef} data={data} t={t}/>
};
export default Conditional;