import React from "react";
import RankingCell from "./RankingCell";

const RankingRow = ({R, row,data,prev,classID}) => {
    return (
        <div id="rankingRowContainer">
            {Array(4).fill(0).map((x, i) => <RankingCell classID={classID} key={i} row={row} col={i} R={R} data={data} prev={prev}/>)}
        </div>
    );
}

export default RankingRow;
