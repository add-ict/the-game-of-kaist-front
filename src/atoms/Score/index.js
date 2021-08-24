import React from "react";
import Scorebar from "./Bar";

const Score = ({data,prev,classID}) => {
    return (
        <div id="scoreContainer">
            <Scorebar score={data?.["class"]?.[classID]?.score?.R?.value} pscore={prev?.["class"]?.[classID]?.score?.R?.value} fraction={(data?.["class"]?.[classID]?.score?.R?.value - data?.["class"]?.[classID]?.score?.R?.min) / (data?.["class"]?.[classID]?.score?.R?.max - data?.["class"]?.[classID]?.score?.R?.min)}
                      color={"#b92193"}/>
            <Scorebar score={data?.["class"]?.[classID]?.score?.G?.value} pscore={prev?.["class"]?.[classID]?.score?.G?.value} fraction={(data?.["class"]?.[classID]?.score?.G?.value - data?.["class"]?.[classID]?.score?.G?.min) / (data?.["class"]?.[classID]?.score?.G?.max - data?.["class"]?.[classID]?.score?.G?.min)}
                      color={"#209b36"}/>
            <Scorebar score={data?.["class"]?.[classID]?.score?.H?.value} pscore={prev?.["class"]?.[classID]?.score?.H?.value} fraction={(data?.["class"]?.[classID]?.score?.H?.value - data?.["class"]?.[classID]?.score?.H?.min) / (data?.["class"]?.[classID]?.score?.H?.max - data?.["class"]?.[classID]?.score?.H?.min)}
                      color={"#226fa3"}/>
            <Scorebar score={data?.["class"]?.[classID]?.score?.B?.value} pscore={prev?.["class"]?.[classID]?.score?.B?.value} fraction={(data?.["class"]?.[classID]?.score?.B?.value - data?.["class"]?.[classID]?.score?.B?.min) / (data?.["class"]?.[classID]?.score?.B?.max - data?.["class"]?.[classID]?.score?.B?.min)}
                      color={"#b04326"}/>
        </div>
    );
};
export default Score;
