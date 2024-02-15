import { useState } from 'react';
import Header from './Components/Header';
import Accueil from './Components/Accueil/Accueil';
import './App.css';
import Footer from './Components/Footer/Footer';
import Youwin from './Components/Youwin/Youwin';
import Youlose from './Components/Youlose/Youlose';

function App() {
  const [count, setCount] = useState("youlose")
  const [choice, setChoice] = useState("")

  let choices = ["rock", "paper", "scissors"]
  let housePick = choices[Math.floor(Math.random()*3)]
  console.log("the house pick = " + housePick);

  let playerChoice;
  // console.log("player choice : " + setChoice(choice));
  

  if (choice === housePick) {
    console.log("Draw");
    

  }else if ((choice === "rock" && housePick === "scissors") || (choice === "paper" && housePick === "rock") || (choice === "scissors" && housePick === "paper")) {  
        console.log("You win")
        // count == "youwin"
        
         
   }else {
    console.log("You lost");
    // count == "youlose"
   }


  return (
    <div className="w-screen h-screen flex flex-col items-center gap-[80px]">
      <Header />
      <Accueil useState = "Accueil" setCount={setCount} setChoice={setChoice}></Accueil>
      {count == "youlose" && <Youlose setCount={setCount}/>}
      {count == "youwin" && <Youwin setCount={setCount} />}
            
      <Footer />

     
    </div>
  )
}

export default App
