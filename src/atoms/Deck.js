import React from "react";

const Deck = () => {
    if (!cards) return <div id="deckContainer"/>
    return (
        <div id="deckContainer">
            {cards.map((x, i) => {
                return <div key={i} className={deck[i] ? "cardoff" : ""}>{x}</div>
            })}
        </div>
    );
};

export default Deck;