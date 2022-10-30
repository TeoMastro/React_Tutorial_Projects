import React from "react";
import logo from '../images/Bamboo-Home-Bali-Airbnb-Off-Grid.jpg'

export default function Hero() {
    return (
        <section className="hero">
            <img alt="image" src={logo} className='hero--photo'/>
            <h1 className='hero--header'>Online Experience</h1>
            <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}