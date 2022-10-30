import React from "react";
import star from '../images/star.jpg';

export default function Card(props) {
    let badgeText;
    if (props.openSpots === 0){
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE";
    }
    return (
        <div className="card">
            {
                badgeText && 
                <div className="card--badge">{badgeText}</div>
            }
            <img alt="image" src={require(`../images/${props.coverImg}`)} />
            <div className="card--stats">
                <img alt="image" src={star} style={{maxWidth: 20}}/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) •</span>
                <span className="gray">{props.location}</span>
                <p>{props.title}</p>
                <p><span className="bold">From {props.price}$ / person</span></p>
            </div>
        </div>
    )
}