import React from "react";
import hajun0 from "../../assets/dRanking/h0.png"
import hajun1 from "../../assets/dRanking/h1.png"
import hajun2 from "../../assets/dRanking/h2.png"
import Tippy from "@tippyjs/react";

const RankingCell = ({row, col, R ,data, prev,classID}) => {
    const icons = [hajun0, hajun1, hajun2].map((x, i) => <img key={i} className="dIcon" src={x} alt={"h" + i}/>);
    const RGHB = "RGHB"
    const d = data?.["class"]?.[R?.[col]?.[row]?.[1]]?.["score"]?.[RGHB?.[col]]?.value
    const p = prev?.["class"]?.[R?.[col]?.[row]?.[1]]?.["score"]?.[RGHB?.[col]]?.value
    return (
        <Tippy content={<div>{d}</div>}>
            <div id="rankingCellContainer" style={(classID==R?.[col]?.[row]?.[1]?{"backgroundColor":"yellow"}:null)}>
                <div>{`${R?.[col]?.[row]?.[0]}. #${R?.[col]?.[row]?.[1]}`}</div>
                {icons[R?.[col]?.[row]?.[2]]}
            </div>
        </Tippy>
    );
};

export default RankingCell;
