import React from "react";

const Deck = ({data,classID}) => {
    if (!data) return <div id="deckContainer"/>
    return (
        <div id="deckContainer">
            {data?.["class"]?.[classID]?.deck?.cards?.map((x, i) => {
                return <div key={i} className={data?.["class"]?.[classID]?.deck?.used[i] ? "cardoff" : ""}>{x}</div>
            })}
        </div>
    );
};

export default Deck;