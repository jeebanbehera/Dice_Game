import { useState } from "react";
import "./Box.css"



export default function Box({
    selectedNumber,setSelectedNumber,error
}){
    let arr = [1,2,3,4,5,6];



    // console.log(selectedNumber)

    return (
        <div>
            <p className="error">{error}</p>
            <div className="boxx">
                {arr.map((val,i)=> (
                    <div style={val===selectedNumber ? {backgroundColor:"black",color:"white" }  : {backgroundColor:"white",color:"black"} }
                        className="box"  
                        key={i}  
                        onClick={()=>setSelectedNumber(val)}  >
                        {val}
                    </div>
                )                 
                )} 
            </div>
            <div className="boxx-para" >
                <p>Select Number</p>
            </div>      
        </div>

        
    )
}