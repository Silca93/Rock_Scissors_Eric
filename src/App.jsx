import { useState } from 'react'
import Header from './Components/Header'
import Accueil from './Components/Accueil/Accueil'
import './App.css'
import Footer from './Components/Footer/Footer'
import Youwin from './Components/Youwin/Youwin'
import Youlose from './Components/Youlose/Youlose'

function App() {
  const [count, setCount] = useState("youlose")

  let choices = ["rock", "paper", "scissors"]
  let housePick = choices[Math.floor(Math.random()*3)]
  console.log(housePick);

  // let clickButton = () => {
  //   setCount(setCount)
  // }

  return (
    <div className="w-screen h-screen flex flex-col items-center gap-[80px]">
      <Header />
      <Youlose useState="youlose" setCount={setCount}/>
      {count == "Accueil" && <Accueil setCount={setCount}></Accueil>}
      {count == "Accueil" && <Youwin setCount={setCount} />}
      
      
      <Footer />

      
    </div>
  )
}

export default App
