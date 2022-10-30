import React from "react";

export default function Header() {
    return(
        <div className="header">
            <img alt="image" className="header--image" src={require('../images/troll.png')} />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </div>
    )
}