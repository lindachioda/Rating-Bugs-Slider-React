import { useState, useEffect } from "react";
import data from "../data";
import Slide from "./Slide";


const Slider = () => {
    const[recensioni]=useState(data)
    const[active, setActive]=useState(0)
    console.log(recensioni)

    //prossima slide
const nextSlide =()=>{
    setActive(prevValue=>{
        if(prevValue +1 > recensioni.length -1){
            return 0
        }
        return prevValue +1
    })
}

//precedente slide
const prevSlide =()=>{
    setActive(prevValue=>{
        if(prevValue -1 < 0){
            return recensioni.length -1
        }
        return prevValue -1
    })
}

//timer intervallo scorrimento automatico slider:
useEffect(()=>{
    const timer = setTimeout(()=>{
        nextSlide()
    }, 5000)
    return()=> clearTimeout(timer)
},[active])


   
  return (
    <div className="container slider">
        {recensioni.map((recensione, index)=>{
            let positionClass:string
            if(index=== active){
                positionClass = "active"
            }else if(index +1 === active || (active === 0 && index === recensioni.length-1)){
                positionClass = "prev"
            }else{
                positionClass = "next"
            }
            
         return    (<Slide key={recensione.id} {...recensione} positionClass={positionClass}/>
         ) 
    })}
    
        <div className="btn-group slider-btn-group">
            <button className="btn btn-slider prev-slider" onClick={prevSlide}>prev</button>
            <button className="btn btn-slider next-slider" onClick={nextSlide}>next</button>
        </div>
    </div>
  )
}

export default Slider;