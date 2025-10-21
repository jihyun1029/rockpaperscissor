import React from 'react'

const Box = (props) => {
    const defaultImage = "https://cdn-icons-png.freepik.com/512/3899/3899616.png";

    const boxClass = `box ${props.result ? (props.result === "TIE" ? "tie" : props.result === "WIN" ? "win" : "lose") : "default"}`;

    return (
        <div className={boxClass}>
            <h1>{props.title}</h1>
            <img className="item-img" src={props.item ? props.item.img : defaultImage} alt="가위 아이콘"/>
            <h2>{props.result}</h2>
        </div>
    );
}

export default Box