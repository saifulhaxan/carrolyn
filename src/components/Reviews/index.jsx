import React from 'react'
import quote9 from "/images/quote1.png";
import quote6 from "/images/qoute6.png";

export const ReviewsBox = (props) => {
    return (
        <div className="feedback_bottom">
            <div className="border_white">
                <div className="qoute_top">
                    <img src={quote9} alt="" />
                </div>
                <div className="feedback_card">
                    <span style={{ color: "white", fontSize: "30px" }}>&#9734;&#9734;&#9734;&#9734;&#9734;</span>
                    <p>{props.description}</p>
                    <h5>{props.title}</h5>
                </div>
                <div className="qoute_bottom">
                    <img src={quote6} alt="" />
                </div>
            </div>
        </div>
    )
}
