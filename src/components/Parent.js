import React, { useState } from 'react'
import Child from './Child'
import { data } from './data'

const Parent = () => {
      const [colors, setColors] = useState(data)
      const [backgroundColor,setBackGroundColor]=useState('')
  const handleColorChange = (color) => {
    setBackGroundColor(color)
  };
  return (
    <div className='or'>
    <div className='parent 'style={{backgroundColor:backgroundColor}}>
      <Child colors={colors} handleColorChange={handleColorChange} />
    </div>
        </div>
  )
}

export default Parent 