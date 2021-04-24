import React from 'react'
import Tile from './Tile'
const Grid = (props) => {
   const {imagesArr, clicking} = props
    return (
        <div className='grid'>
        {
            imagesArr.map(img => <Tile key={img.id} id={img.id} onClick={clicking} name={img.name}/>)
        }   
        </div>
    )
}

export default Grid
