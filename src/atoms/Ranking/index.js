import React, {useEffect, useState} from "react";
import RankingRow from "./RankingRow";
import "./index.scss"
import {useSelector} from "react-redux";

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
const Ranking = () => {
    const [R, setR] = useState(Array(4).fill(Array(5).fill([1, 0, 0])))
    const {ranking, prevRanking} = useSelector(state => ({
        ranking: state.publicDB?.ranking,
        prevRanking: state.publicDB?.prevRanking,
    }));
    useEffect(() => {
        setR([
            toRank(ranking?.Relation, prevRanking?.Relation),
            toRank(ranking?.Grades, prevRanking?.Grades),
            toRank(ranking?.Health, prevRanking?.Health),
            toRank(ranking?.Bonus, prevRanking?.Bonus),
        ]);
    }, [ranking])
    return (
        <div id="rankingContainer">
            {Array(5).fill(0).map((x, i) => <RankingRow key={i} row={i} R={R}/>)}
        </div>
    );
};
export default Ranking;