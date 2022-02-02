import React from 'react'
import Bg from './Image/cover.png'


const Hero = () => {

    return(
        <div style={{
            width:"100%",
            height:"500px",
            backgroundColor: "yellow"
        }}>
           <img src={Bg} style={{width:"100%", height:"100%"}}/> 
        </div>
    )
}

export default Hero