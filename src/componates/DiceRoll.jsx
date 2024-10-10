import { useState } from "react"
import "./DiceRoll.css"

export default function DiceRoll({
    currDice,randomNumber,setScore,showRules,rules
}){




    let restore =()=>{
        setScore(()=>0)
    }


    return(
        <div className="roll">
            <div onClick={randomNumber} className="roll-img">
                <img  src={`dice_${currDice}.png`} alt="dice" />
                <p>Click on Dice to roll</p>
            </div>
            <div className="roll-btn">
                <button onClick={restore}>Restore Score</button>
                <br />
                <button onClick={showRules}  className="show-rules">
                    {rules ? "Hide" : "Show"}Rules
                </button>
            </div>  
            
        </div>
    )
}