import React from 'react'

const House = (props) => {
    return (
        <div className="house" >
            <div className="house-title">{props.house.title}</div>
            <div className="house-year">{props.house.year}</div>
        </div>
    )
}


export default House