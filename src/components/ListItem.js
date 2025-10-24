import React from 'react'

const ListItem = ({ color, handleColorChange}) => {
  console.log('color', color)
  const { ColorName } = color

const handleClick=(b)=>{
  handleColorChange(b)
}

  return (
    <div className='toper'>
      <button
        className='btn'
        style={{
          
          backgroundColor: ColorName,
          border: "none",
          cursor: "pointer"
        }}
        onClick={()=>handleClick(ColorName)}  

      >
        {ColorName}
      </button>
    </div>
  )
}

export default ListItem
