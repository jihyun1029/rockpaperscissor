import {useState} from "react";
import './App.css';
import Box from "./component/Box";

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3,4번의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패결과에따라 테두리 색이 바뀐다 (이기면-초록, 지면-빨강 비기면-검은색)

const choice = {
    rock: {
        name: "Rock",
        img: "https://image.auction.co.kr/itemimage/28/65/8e/28658ea5e6.jpg"
    },
    scissors: {
        name: "Scissors",
        img: "https://cdn.imweb.me/thumbnail/20200515/f5f09c900eed0.png"
    },
    paper: {
        name: "Paper",
        img: "https://static.partyking.org/fit-in/1300x0/products/original/uv-neon-papper-72817-8.jpg"
    }
}

function App() {
    const [userSelect, setUserSelect] = useState(choice.rock);
    const [computerSelect, setComputerSelect] = useState(null);
    const [result, setResult] = useState(null);

    const play = (userChoice) => {
        setUserSelect(choice[userChoice]);
        let computerChoice = randomChoice();
        setComputerSelect(computerChoice);
        judgement(choice[userChoice], computerChoice);
        setResult(judgement(choice[userChoice], computerChoice));
    }

    const judgement = (user, computer) => {
        console.log("user", user, "computer", computer);

        // user == computer tie
        // user == rock, computer == scissors user 이긴거지
        // user == "rock", computer == paper user 진거지
        // user == scissors computer == paper user 이긴거지
        // user == scissors computer == rock user 진거지
        // user == paper, computer == rock user 이긴거지
        // user == paper, computer == scissors user 진거

        /*
        if(user.name == computer.name) {
            return "tie"
        } else if(user.name == "Rock") {
            if(computer == "Scissors") {
                return "WIN"
            } else {
                return "lose"
            }
        }
        */
        // 삼항 연산자로 바꾸
        if (user.name == computer.name) {
            return "tie"
        } else if (user.name === "Rock") return computer.name === "Scissors" ? "WIN" : "LOSE"
        else if (user.name === "Scissors") return computer.name === "Paper" ? "WIN" : "LOSE"
        else if (user.name === "Paper") return computer.name === "Rock" ? "WIN" : "LOSE"
    }

    const randomChoice = () => {
        let itemArray = Object.keys(choice); // 객체에 키값만 뽑아서 array로 만들어주는 함수
        console.log("item array", itemArray);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        // console.log("random value", randomItem);
        let final = itemArray[randomItem];
        // console.log("final", final);
        return choice[final];
    }

    return (
        <div>
            <div className="main">
                <Box title="You" item={userSelect} result={result}/>
                <Box title="computer" item={computerSelect} result={result}/>
            </div>

            <div className="main">
                <button onClick={() => play("scissors")}>✌️</button>
                <button onClick={() => play("rock")}>✊</button>
                <button onClick={() => play("paper")}>🖐️</button>
            </div>
        </div>
    );
}

export default App;
