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
    const [userSelect, setUserSelect] = useState(null);
    const [computerSelect, setComputerSelect] = useState(null);
    const [result, setResult] = useState({user:null, computer: null});

    const play = (userChoice) => {
        let userPick = choice[userChoice];
        let computerPick = randomChoice();
        let gameResult = judgement(userPick, computerPick);

        console.log("Game result:", gameResult);

        setUserSelect(userPick);
        setComputerSelect(computerPick);
        setResult(gameResult);
    }

    const judgement = (user, computer) => {
        // console.log("user", user, "computer", computer);

        if (user.name == computer.name) {
            return { user: "TIE", computer: "TIE" };
        } else if (
            (user.name === "Rock" && computer.name === "Scissors") ||
            (user.name === "Scissors" && computer.name === "Paper") ||
            (user.name === "Paper" && computer.name === "Rock")
        ) {
            return {user: "WIN", computer: "LOSE"};
        } else {
            return {user: "LOSE", computer: "WIN"};
        }
    }

    const randomChoice = () => {
        let itemArray = Object.keys(choice); // 객체에 키값만 뽑아서 array로 만들어주는 함수
        // console.log("item array", itemArray);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        // console.log("random value", randomItem);
        let final = itemArray[randomItem];
        // console.log("final", final);
        return choice[final];
    }

    return (
        <div className="wrap">
            <h1 className="title">가위바위보 게임</h1>
            <div className="main">
                <Box title="You" item={userSelect} result={result.user}/>
                <Box title="computer" item={computerSelect} result={result.computer}/>
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
