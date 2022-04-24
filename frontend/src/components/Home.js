import React from "react";

const Home = () => {
    return (
        <>
            <div className="hero" style={{ backgroundImage: `url(${require("../images/hero_1.jpg")})` }} />

            <div className="container">
                <h2>Asmeninio biudžeto analizės aplikacija</h2>
                <p>Sužinokite kiek ir kam kada išleidote pinigų.</p>
            </div>
        </>
    );
};
export default Home;
