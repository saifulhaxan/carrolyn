import React from 'react'
import { Link } from "react-router-dom";

export const About = (props) => {
    return (
        <div className={`About ${props.AboutClass}`}>
            <div className='about_left'>
                <h1>{props.title}</h1>
                {props.description && props.description.map((content, index) => (
                    <p key={index}>{content}</p>
                ))}

                {
                    props.btnTxt && <Link to={props.link} className='btn'> {props.btnTxt} </Link>
                }

            </div>
            <div className='about_right'>
                <img src={props.img} />
            </div>
        </div>
    )
}
