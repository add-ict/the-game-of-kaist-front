import React from 'react';
import {Link} from "react-router-dom";

const DBrootsNicknames = ["apple", "banana", "carrot", "dragonfruits"];
const Home = ({nDBroots, DBroot, setDBroot}) => {
    let DBlist = DBrootsNicknames.slice(0, nDBroots)
    return (
        <>
            <br/>
            <br/>
            <h1>Home</h1>
            <br/>
            <div>
                <label htmlFor="dbRootSelect">Choose Game: </label>
                <select id="dbRootSelect" value={DBroot} onChange={res => {
                    setDBroot(res.target.value)
                }}>
                    {DBlist.map((x, i) => <option key={x} value={i}>{x}</option>)}
                </select>
            </div>
            <br/>
            <div id="homeMain">
                <div>
                    <h2>For Students</h2>
                    {Array(5).fill(0).map((x, i) => <div key={i}><Link to={"/app/" + i}>
                        <button>Class #{i}</button>
                    </Link></div>)}
                </div>
                <div style={{"marginLeft": "10vh"}}>
                    <h2>Admin</h2>
                    {Array(5).fill(0).map((x, i) => <div key={i}><Link to={"/admin/" + i}>
                        <button>Class #{i}</button>
                    </Link></div>)}
                </div>
            </div>
            <br/>
            <p>
                패치노트
                <div>v0.1 8월 11일 첫 테스트</div>
                <div>v0.2 8월 13일 <br/>
                    1. 0번 못가는 문제 수정<br />
                    2. favicon 추가<br />
                    3. turn에 이름 변경<br />
                    4. 매턴에 approve 필요
                </div>
            </p>
        </>
    );
};

export default Home;