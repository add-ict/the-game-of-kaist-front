import React from "react";
import RankingCell from "./RankingCell";

const RankingRow = ({R, row}) => {
    return (
        <div id="rankingRowContainer">
            {Array(4).fill(0).map((x, i) => <RankingCell key={i} row={row} col={i} R={R}/>)}
        </div>
    );
}

export default RankingRow;