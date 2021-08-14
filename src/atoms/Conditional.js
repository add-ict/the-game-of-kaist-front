import React from "react";
import Map from "./Map";
import Modal from "./Modal";
import {useSelector} from "react-redux";
import * as GS from "../gameStates";
import AskC from "./SeasonUse/AskC";
import AskCb from "./SeasonUse/AskCb";
import AskCL from "./SeasonUse/AskCL";
import AskR from "./SeasonUse/AskR";
import AskRR from "./SeasonUse/AskRR";
import AskR1R2b from "./SeasonUse/AskR1R2b";
import AskNothing from "./SeasonUse/AskNothing";
import UseBonus from "./SeasonUse/UseBonus";
import Result from "./Result";

const Conditional = ({updater}) => {
    const {lastSEASON_SELECT,lastLASTEVENT, modal, modalTitle, gameState} = useSelector(state => ({
        turn: state.publicDB?.turns,
        gameState: state.publicDB?.gameState,
        modal: state.publicDB?.modal,
        modalTitle: state.privateDB?.modalTitle,
        lastSEASON_SELECT: state.privateDB?.lastSEASON_SELECT,
        lastLASTEVENT: state.privateDB?.lastLASTEVENT,
    }));
    if (!updater) return <Map/>;
    const onClick = updater(GS.gameStates[gameState]);
    if (gameState == GS.MOVEMENT) return <Map onClick={onClick}/>;
    else if (gameState == GS.MINIGAME) return <Modal title={modalTitle} innerHTMLs={modal} onSubmit={onClick}/>;
    else if (gameState == GS.SEASON_SELECT) return <Modal title={modalTitle} innerHTMLs={modal} onSubmit={onClick}/>;
    else if (gameState == GS.SEASON_USE && Number.isInteger(lastSEASON_SELECT?.askN))
        return [<AskNothing title={lastSEASON_SELECT?.desc} onSubmit={onClick}/>,
            <AskC title={lastSEASON_SELECT?.desc} onSubmit={onClick}/>,
            <AskCb title={lastSEASON_SELECT?.desc} onSubmit={onClick}/>,
            <AskCL title={lastSEASON_SELECT?.desc} onSubmit={onClick}/>,
            <AskR title={lastSEASON_SELECT?.desc} onSubmit={onClick}/>,
            <AskR1R2b title={lastSEASON_SELECT?.desc} onSubmit={onClick}/>,
            <AskRR title={lastSEASON_SELECT?.desc} onSubmit={onClick}/>][lastSEASON_SELECT?.askN]
    else if (gameState == GS.LASTEVENT) return <Modal title={modalTitle} innerHTMLs={modal} onSubmit={onClick}/>;
    else if (gameState == GS.LASTEVENT_USE && Number.isInteger(lastLASTEVENT?.askN))
        return [<AskNothing title={lastLASTEVENT?.desc} onSubmit={onClick} noB/>,
            <AskC title={lastLASTEVENT?.desc} onSubmit={onClick} noB/>,
            <AskCb title={lastLASTEVENT?.desc} onSubmit={onClick} noB/>,
            <AskCL title={lastLASTEVENT?.desc} onSubmit={onClick} noB/>,
            <AskR title={lastLASTEVENT?.desc} onSubmit={onClick} noB/>,
            <AskR1R2b title={lastLASTEVENT?.desc} onSubmit={onClick} noB/>,
            <AskRR title={lastLASTEVENT?.desc} onSubmit={onClick} noB/>][lastLASTEVENT?.askN]
    else if (gameState == GS.USE_BONUS) return <UseBonus onSubmit={onClick} /> ;
    else if (gameState == GS.RESULT) return <Result />;
    else return <Map/>;
};
export default Conditional;