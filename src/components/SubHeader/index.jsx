import React from 'react'

export const SubHeader = (props) => {
    return (
        <div className='PageHeader'>
            <h1>{props.name}</h1>
            <div className='pageheader_dog'>
                <img src={props.img} />
            </div>
        </div>
    )
}
