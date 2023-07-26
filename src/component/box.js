import React from 'react'

const Box = (props) => {
    let result;
    if (
        props.title === "Computer" && props.result !== "Tie" && props.result !== ""  ){
        // 카드가 computer카드이고 && 결과가 비긴건 아니고 && props.result에 값이 있는것
            result = props.result === "Win" ? "Lose" : "Win";
        } else {// 위의 경우가 아니라면 props&nbsp;로 전달된 결과를 그대로 쓴다.
            result = props.result;
        }
    return (
    <div className={`box ${result}`}>
        <h1>{props.title}</h1>
        <h2>{props.item && props.item.name}</h2>
        <img src={props.item && props.item.img}/>
        <h2>{result}</h2>
    </div>
  ) // props.item &&  = 값이 없을 때의 가드
}

export default Box;
