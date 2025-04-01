import React from 'react'

const Box = (props) => {
    return (
        <div className="box">
            <h1>{props.title}</h1>
            <img className="item-img" src="https://cdn.imweb.me/thumbnail/20200515/f5f09c900eed0.png"/>
            <h2>WIN</h2>
        </div>
    )
}

export default Box