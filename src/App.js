import { useState } from 'react';
import './App.css';
import Box from "./component/box";
import RockImg from "./img/rock.jpg";
import ScissorsImg from "./img/scissors.jpg";
import PaperImg from "./img/paper.jpg";

//1. 박스 2개 (타이틀, 사진정보, 결과값)
//2. 가위 바위 보 버튼이 있다.
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택
//5. 3,4의 결과를 가지고 승패를 따진다.
//6. 승패 결과에 따라 테두리 색상이 바뀐다.
// user와 computer의 결과가 달라야한다

const choice = {
  rock:{
    name:"Rock",
    img:RockImg
  },
  scissors:{
    name:"Scissors",
    img:ScissorsImg
  },
  paper:{
    name: "Paper",
    img:PaperImg
  }
}
function App() {
  const[userSelect,setUserSelect] = useState(null)
  const[computerSelect,setComputerSelect] = useState(null)
  const[result,setResult]=useState("")

  const play = (userChoice) => {
   setUserSelect(choice[userChoice])
   let computerChoice = randomChoice();
   setComputerSelect(computerChoice)
   setResult(judgement(choice[userChoice],computerChoice))
  };

  const judgement = (user, computer) => {

    // user == computer //tie
    // user == rock, computer == scissors //user win
    // user == rock, computer == paper //user lose
    // user == scissors, computer == paper //user win
    // user == scissors, computer == rock //user lose
    // user == paper, computer == rock //user win
    // user == paper, computer == scissor //user lose

    if(user.name === computer.name){
      return "Tie";
    }else if(user.name === "Rock"){
      return computer.name === "Scissors"?"Win":"Lose";
    }else if(user.name === "Scissors"){
      return computer.name === "Paper"?"Win":"Lose";
    }else if(user.name === "Paper"){
      return computer.name === "Rock"?"Win":"Lose";
  }
}
  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  return(
    <div> 
      <h1>가위바위보게임</h1>
      <div className='container'>
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className='container'>
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
      </div>
  )
}//리액트를 처음 렌더링할때 함수를 실행시켜버리므로 콜백(전달하는식의)형태로 써줘야함

export default App;
