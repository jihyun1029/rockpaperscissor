import logo from './logo.svg';
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
    papper : {
        name: "Paper",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFOdojqwgJXPjP-R2APmY8eNY8_XhFteZLw&s"
    }
}
function App() {
    const play = (userChoice) => {
        console.log("선택됨!", userChoice);
    }

  return (
      <div>
          <div className="main">
              <Box title="You" />
              <Box title= "computer" />
          </div>

          <div className="main">
              <button onClick={() => play("scissors")}>가위</button>
              <button onClick={() => play("rock")}>바위</button>
              <button onClick={() => play("paper")}>보</button>
          </div>
      </div>
  );
}

export default App;
