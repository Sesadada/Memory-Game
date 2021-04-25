import React from 'react'
import Tile from './Tile'
const Grid = (props) => {
   const {imagesArr, clicking, found, color} = props
    return (
        <div className='grid'>
        {
            imagesArr.map(img => 
            <Tile found={found} 
            color={color} 
            key={img.id} 
            id={img.id} 
            onClick={clicking} 
            name={img.name}/>)
        }   
        </div>
    )
}

export default Grid
