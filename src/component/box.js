import { useState, useEffect } from 'react';
import React from 'react';
import RockImg from '../assets/rock.jpg';
import ScissorsImg from '../assets/scissors.jpg';
import PaperImg from '../assets/paper.jpg';

const Box = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [RockImg, ScissorsImg, PaperImg];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 100);

        return () => clearInterval(interval);
    }, []);

    let result;
    if (
        props.title === "Computer" && props.result !== "Tie" && props.result !== ""
    ) {
        // 카드가 computer카드이고 && 결과가 비긴건 아니고 && props.result에 값이 있는것
        result = props.result === "Win" ? "Lose" : "Win";
    } else {// 위의 경우가 아니라면 props&nbsp;로 전달된 결과를 그대로 쓴다.
        result = props.result;
    }

    // 기본 이미지 설정
    const defaultImage = images[currentIndex];

    return (
        <div className={`box ${result}`}>
            <h1>{props.title}</h1>
            <h2>{props.item ? props.item.name : ""}</h2>
            <div><img src={props.item ? props.item.img : defaultImage} alt={props.item ? props.item.name : "Default Name"} /></div>
            <h2>{result}</h2>
        </div>
    );
}

export default Box;
