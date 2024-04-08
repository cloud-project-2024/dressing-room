import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [countOutfit, setCountOutfit] = useState(0);
  const head = ["head1.webp", "head2.webp", "ajarn.webp"];
  const outfit = ["t1.png", "t3.png", "t4.png"];
  function changeHead() {
    if (count + 1 === head.length) setCount(0);
    else setCount(count + 1);
  }
  function changeOutfit(){
    if (countOutfit + 1 === outfit.length) setCountOutfit(0);
    else setCountOutfit(countOutfit + 1);
  }
  return (
    <div style={{backgroundImage: `url('/img/background.png')`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', height:'100%', width:'100%'}}>
      <div className="text-white">Test ja</div>
      <button onClick={() => changeHead()}>Change</button>
      <div>
        <img src={`/img/head/${head[count]}`} alt="head1" style={{height:"15%, ",width:"15%"}}/>
      </div>
      <div>
        <img src={`/img/outfit/${outfit[countOutfit]}`} alt="t1" style={{height:"40%, ",width:"40%"}}/>
      </div>
      <button onClick={() => changeOutfit()}>Change</button>
    </div>
  );
}

export default App;
