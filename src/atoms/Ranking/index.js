import React, {useEffect, useState} from "react";
import RankingRow from "./RankingRow";
import "./index.scss"

const cmp = (x, pX) => {
    if (x == pX) return 0;
    if (x > pX) return 2;
    return 1;
}
const toRank = (rank, prevRank) => {
    const ret = []
    for (let i = 1; i <= 5; i++)
        for (let j = 0; j < 5; j++)
            if (rank?.[j] == i)
                ret.push([i, j, cmp(rank?.[j], prevRank?.[j])])
    return ret
}
const Ranking = ({data,prev,classID}) => {
    const [R, setR] = useState(Array(4).fill(Array(5).fill([1, 0, 0])))
    useEffect(() => {
        setR([
            toRank(data?.ranking?.R, prev?.ranking?.R),
            toRank(data?.ranking?.G, prev?.ranking?.G),
            toRank(data?.ranking?.H, prev?.ranking?.H),
            toRank(data?.ranking?.B, prev?.ranking?.B),
        ]);
    }, [data,prev])
    return (
        <div id="rankingContainer">
            {Array(5).fill(0).map((x, i) => <RankingRow key={i} row={i} R={R} data={data} prev={prev} classID={classID}/>)}
        </div>
    );
};
export default Ranking;
