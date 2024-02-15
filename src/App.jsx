import { useState } from 'react';
import Header from './Components/Header';
import Accueil from './Components/Accueil/Accueil';
import './App.css';
import Footer from './Components/Footer/Footer';
import Youwin from './Components/Youwin/Youwin';
import Youlose from './Components/Youlose/Youlose';
import Draw from './Components/Draw/Draw';

function App() {
  const [count, setCount] = useState("Accueil")
  const [choice, setChoice] = useState("")

  let choices = ["rock", "paper", "scissors"]
  let housePick = choices[Math.floor(Math.random()*3)]
  console.log("the house pick = " + housePick);


  let draw;
  let didIwin;
  if (choice === housePick) {
    console.log("Draw");
    draw = true;
    
    

  }else if ((choice === "rock" && housePick === "scissors") || (choice === "paper" && housePick === "rock") || 
  (choice === "scissors" && housePick === "paper")) {  
        console.log("You win")
        didIwin = true;
        console.log(didIwin);
        // count == "youwin"
        
         
   }else {
    console.log("You lost");
    didIwin = false;
    console.log(didIwin);
    // count == "youlose"
   }


  return (
    <div className="w-screen h-screen flex flex-col items-center gap-[80px]">
      <Header />
      <Accueil useState = "Accueil" setCount={setCount} setChoice={setChoice}></Accueil>
      {/* {count == "youlose" && <Youlose setCount={setCount}/>} */}
      {didIwin? <Youwin housePick={housePick} choice={choice} setCount={setCount}  /> : ""}
      {!didIwin? <Youlose housePick={housePick} choice={choice} setCount={setCount}  /> : ""}
      {draw? <Draw housePick={housePick} choice={choice} setCount={setCount}  /> : ""}
      
            
      <Footer />

     
    </div>
  )
}

export default App
