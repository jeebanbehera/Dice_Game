import "./TotalScore.css"
import Box from "./Box"
import DiceRoll from "./Diceroll"
import { useState } from "react";
import Rules from "./Rules";



export default function Diceroll(){
    let [selectedNumber,setSelectedNumber] = useState();
    let [currDice,setCurrDice]=useState(1);
    let [error,setErroer]=useState()
    let [score,setScore]=useState(0)
    let [rules,setRules]=useState(false)


    let randomNumber = ()=>{
        let newNo= Math.floor(Math.random()*6)+1;
        setCurrDice((prev)=>newNo)
        console.log(newNo)

        if(!selectedNumber) {
            setErroer("You have not selected any number");
            return;
        }
        else{
            setErroer("")
        };

        if(selectedNumber===newNo){
            setScore((prev)=>{
                return prev + newNo
            })
        }
        else{
            setScore((prev)=>{
                return prev - 2
            })
        }
    };

    let showRules=()=>{
        setRules((prev)=>{
            return (prev=!prev)
        })
    }
    
    return(
        <div>
            <div className="total-score">
                <div>
                    <h1>{score}</h1>
                    <p>Total Score</p>
                </div>
                <Box error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
            </div> 
            <DiceRoll currDice={currDice} randomNumber={randomNumber} setScore={setScore} showRules={showRules} rules={rules} /> 
            {rules && <Rules />}  
        </div>

    )
}