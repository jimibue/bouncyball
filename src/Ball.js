import React from 'react'
const Ball = ({x,y}) =>{
  return(
    <div style={{left: x ,top:y, ...staticStyles }}>
      {`x: ${x}, y: ${y}`}
    </div>
  )
}

const staticStyles = {
  position:'absolute', 
  background:'red',
  width:'50px',
  height:'50px',
  borderRadius:`100%`,
  fontSize:'8px'
}

export default Ball