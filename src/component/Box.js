import React from 'react'

const Box = (props) => {
    const boxClass = `box ${props.result ? (props.result === "TIE" ? "tie" : props.result === "WIN" ? "win" : "lose") : "default"}`;

    return (
        <div className={boxClass}>
            <h1>{props.title}</h1>
            <img className="item-img" src={props.item && props.item.img}/>
            <h2>{props.result}</h2>
        </div>
    );
}

export default Box