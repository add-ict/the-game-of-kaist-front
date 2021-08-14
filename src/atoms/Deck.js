import React from "react";
import {useSelector} from "react-redux";

const Deck = () => {
    const {deck,cards} = useSelector(state => ({
        deck: state.privateDB?.deck,
        cards: state.publicDB?.cards,
    }));
    if (!cards) return <div id="deckContainer"/>
    console.log(deck,cards)
    return (
        <div id="deckContainer">
            {cards.map((x, i) => {
                return <div key={i} className={deck[i] ? "cardoff" : ""}>{x}</div>
            })}
        </div>
    );
};

export default Deck;