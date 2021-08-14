import React from "react";
import hajun0 from "../../assets/dRanking/h0.png"
import hajun1 from "../../assets/dRanking/h1.png"
import hajun2 from "../../assets/dRanking/h2.png"

const RankingCell = ({row, col, R}) => {
    const icons = [hajun0, hajun1, hajun2].map((x, i) => <img key={i} className="dIcon" src={x} alt={"h" + i}/>);
    return (
        <div id="rankingCellContainer">
            <div>{`${R?.[col]?.[row]?.[0]}. #${R?.[col]?.[row]?.[1]}`}</div>
            {icons[R?.[col]?.[row]?.[2]]}
        </div>
    );
}

export default RankingCell;