import "./DiceGame.css"



export default function DiceGame({toggle}){
   

    return(
        <div className="main">
            <div className="dice">
                <div className="dice-img">
                    <img src="./dices-1.png" alt="" />
                </div>
                <div className="dice-heading">
                <h1>DICE GAME</h1>
                <button onClick={toggle}>Play Now</button>
                </div>
            </div>
        </div>

    )
}