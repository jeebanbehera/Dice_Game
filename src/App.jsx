
// import './App.css'
import DiceGame from "./componates/DiceGame"
import TotalScore from "./componates/TotalScore"
import { useState } from "react"

function App() {
  let [screen,setScreen]=useState(false);

  let newScreen=()=>{
    setScreen((prev)=>{
      return !prev
    })
  }


  return (
    <>
      {screen ? <TotalScore/> : <DiceGame toggle={newScreen}/>}
      {/* <TotalScore/> */}
    </>
  )
}

export default App
