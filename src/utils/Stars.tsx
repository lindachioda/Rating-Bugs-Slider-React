//inserisco la funzione riutilizzabile

import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const Stars =(num:number)=>{
    //crea ARRAY!!!
    return Array.from({length: 5}, (_, index)=>{
        if(num>= index +1){
            return <div className="star" style={{color: "#fca903"}}><BsStarFill key={index}/></div>
        }else if (num>= index +0.5){
            return <div className="star" style={{color: "#fca903"}}><BsStarHalf key={index}/></div>
        }else{
            return <div className="star" style={{color: "#fca903"}}><BsStar key={index}/></div>
        }
    })
}

export default Stars;