import { useEffect, useState } from "react"
import './ScrollUpButton.css'


const ScrollUpButton = () => {
    const[isVisible,setIsVisible]=useState(false)
    const toggleVisibility=()=>{
        if (window.pageYOffset>300) {
            setIsVisible(true)
            
        }else{
            setIsVisible(false)
        }
    }


    const scrollToTop=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    useEffect(()=>{
        window.addEventListener('scroll',toggleVisibility)
        return()=>{
            window.removeEventListener('scroll',toggleVisibility)
        }
    })


    
  return (
    <div className="scroll-up-button">
        {isVisible&&(<button onClick={scrollToTop}><i className="fa-solid fa-arrow-up-long"></i></button>)}

    </div>
  )
}

export default ScrollUpButton