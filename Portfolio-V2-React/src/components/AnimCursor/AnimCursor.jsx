import React, {useState, useEffect } from 'react'
import AnimatedCursor from "react-animated-cursor"

const AnimCursor = () => {

  return (
    <div className='cursor-shape'>
        <AnimatedCursor 
            innerSize={8}
            outerSize={12}
            color='97,103,122'
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
        />
    </div>
  )
}

export default AnimCursor