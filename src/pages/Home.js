import React from 'react';
import {Link} from "react-router-dom";

const Home = ({rootRef}) => {
    return (
        <>
            <br/>
            <br/>
            <h1>Home</h1>
            <br/>
            <label>login: </label>
            <input />
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

        </>
    );
};

export default Home;