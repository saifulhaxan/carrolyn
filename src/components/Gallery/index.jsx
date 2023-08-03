import React from 'react'
import { Link } from 'react-router-dom'

export const Gallery = (props) => {
    return (
        <div className={props.containerClass}>
            {props.topImage && <div className={props.firstClass}>
                <img src={props.topImage} />
            </div>}
            <div className="gallery_head">

                <h1>{props.title}</h1>
                <p>
                    {props.description}
                </p>
            </div>
            <div className="gallery_bottom">
                <div className={props.galleryClass}>
                    {props.GalleryData && props.GalleryData.map((image, index) => {
                        return (
                            <div className="grid__item" key={index}>
                                <img src={`/images/${image}`} alt="abc" />
                            </div>
                        );
                    })}
                    {props.btnTxt && <Link to={props.link} className="btn mt-3">{props.btnTxt}</Link>}

                </div>
            </div>
            {props.img && <div className="dog_img_2">
                <img src={props.img} />
            </div>
            }

        </div>
    )
}
