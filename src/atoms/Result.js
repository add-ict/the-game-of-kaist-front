import React, {useEffect, useState} from "react";
import "./Result.scss"
import {useSelector} from "react-redux";

const Result = () => {
    const {ranking} = useSelector(state => ({
        ranking: state.publicDB?.ranking,
    }));
    const LS=[];
    const SC = {
        1: 100,
        2: 80,
        3: 60,
        4: 40,
        5: 20
    }
    for (let i=0;i<5;i++)
        LS.push(SC?.ranking?.Grades?.[i])
    for (let i=0;i<5;i++)
        LS[i]+=SC?.ranking?.Relation?.[i]
    for (let i=0;i<5;i++)
        LS[i]+=SC?.ranking?.Health?.[i]
    return (
        <div id="resultContainer">
            <div className="innerResultContainer">
                <div>Grades</div>
                {Array(5).fill(0).map((x,i)=><div>{i}:{ranking?.Grades?.[i]}</div>)}
            </div>
            <div className="innerResultContainer">
                <div>Relation</div>
                {Array(5).fill(0).map((x,i)=><div>{i}:{ranking?.Relation?.[i]}</div>)}
            </div>
            <div className="innerResultContainer">
                <div>Health</div>
                {Array(5).fill(0).map((x,i)=><div>{i}:{ranking?.Health?.[i]}</div>)}
            </div>
            <div>
                ⇒
            </div>
            <div className="innerResultContainer">

            </div>
        </div>
    );
}
export default Result;