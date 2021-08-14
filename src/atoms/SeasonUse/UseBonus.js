import React, {useEffect, useState} from "react";
import "./index.scss"
import {useSelector} from "react-redux";

const UseBonus = ({onSubmit}) => {
    const {score} = useSelector(state => ({
        score: state.privateDB?.score,
    }));
    const [submit, setSubmit] = useState(false);
    if (!onSubmit) onSubmit = x => {
        console.log("UseBonus", x)
    }
    const [newR, setNewR]=useState(0);
    const [newG, setNewG]=useState(0);
    const [isValid,setIsValid]=useState(true);
    useEffect(()=>{
        if (score.Bonus==0) setIsValid(newR==0&&newG==0)
        else if (score.Bonus>0) setIsValid(newR>=0&&newG>=0&&(score.Bonus-newR-newG)>=0)
        else if (score.Bonus<0) setIsValid(newR<=0&&newG<=0&&(score.Bonus-newR-newG)<=0)
    },[newR,newG])
    return (
        <div id="askContainer" className={submit ? "submittedAskContainer" : null}>
            <div>
                <p>보너스 사용</p>
                <p className={isValid?"Valid":"Invalid"}>{isValid?"Valid":"Invalid"}</p>
                <label>Relation:</label><span><input type="text" value={newR} onChange={res=>{
                setNewR(res.target.value)
            }}/></span><br/>
                <label>Grade: </label><span><input type="text" value={newG} onChange={res=>{
                setNewG(res.target.value)
            }}/></span><br/>
                <label>Health:</label><span><input type="text" value={score.Bonus-newR-newG} disabled/></span>
            </div>
            <button onClick={() => {
                if (!submit) onSubmit({Relation: newR, Grades: newG, Health: score.Bonus-newR-newG});
                setSubmit(true)
            }}>
                <div>Submit</div>
            </button>
        </div>
);
}
export default UseBonus;