import React, { useState } from 'react'
import ListItem from './ListItem'

const Child = ({colors,handleColorChange}) => {
  console.log('colors',colors)
  
  return (
    <>
    {colors.map((color) => (
      <ListItem   key={color.id} color={color} handleColorChange={handleColorChange}  />
      
    ))}
    </>
  )
}

export default Child