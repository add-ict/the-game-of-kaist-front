import React from "react";
import Scorebar from "./Bar";
import {useSelector} from "react-redux";

const Score = () => {
    const {minScore, maxScore, score} = useSelector(state => ({
        minScore: state.privateDB?.scoreScale?.min,
        maxScore: state.privateDB?.scoreScale?.max,
        score: state.privateDB?.score,
    }));
    console.log('Relation',(score?.Relation - minScore) / (maxScore - minScore))
    console.log('Grades',(score?.Grades - minScore) / (maxScore - minScore))
    console.log('Health',(score?.Health - minScore) / (maxScore - minScore))
    console.log('Bonus',(score?.Bonus - minScore) / (maxScore - minScore))
    console.log(minScore,maxScore,score)
    return (
        <div id="scoreContainer">
            <Scorebar score={score?.Relation} fraction={(score?.Relation - minScore) / (maxScore - minScore)}
                      color={"#5c1a40"}></Scorebar>
            <Scorebar score={score?.Grades} fraction={(score?.Grades - minScore) / (maxScore - minScore)}
                      color={"#02522b"}></Scorebar>
            <Scorebar score={score?.Health} fraction={(score?.Health - minScore) / (maxScore - minScore)}
                      color={"#2E3192"}></Scorebar>
            <Scorebar score={score?.Bonus} fraction={(score?.Bonus - minScore) / (maxScore - minScore)}
                      color={"#ad4122"}></Scorebar>
        </div>
    );
};
export default Score;