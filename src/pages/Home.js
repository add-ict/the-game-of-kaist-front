import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "antd";

const Home = ({rootRef}) => {
    return (
        <>
            <br/>
            <br/>
            <h1>Home</h1>
            <br/>
            <h2 style={{"color":"red"}}>Disclaimer: 디자인 작업 중!</h2>
            <br/>
            <label>login: </label>
            <input />
            <br/>
            <div id="homeMain">
                <div>
                    <h2>For Students</h2>
                    {Array(5).fill(0).map((x, i) => <div key={i}><Link to={"/app/" + i}>
                        <Button>Class #{i+27}</Button>
                    </Link></div>)}
                </div>
                <div style={{"marginLeft": "10vh"}}>
                    <h2>Admin</h2>
                    {Array(5).fill(0).map((x, i) => <div key={i}><Link to={"/admin/" + i}>
                        <Button>Class #{i+27}</Button>
                    </Link></div>)}
                </div>
            </div>
            <br/>

        </>
    );
};

export default Home;