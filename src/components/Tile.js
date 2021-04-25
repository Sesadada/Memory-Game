import {useState, useEffect} from 'react'
const Tile = (props) => {

    const {found, name, id, onClick, color} = props
    const [newColor, setNewColor] = useState(color)
    let arr = found? Object.entries(found): null

    useEffect(() => {
       if(arr){
           const final = arr.some(a => a[0].slice(0,-1) === name)
           final && setNewColor('tileFound')
        } else {
            setNewColor(color)
        }
    }, [arr, name, color])

    return (
        <div id={id} name={name} className={newColor} onClick={onClick}> 
           <div  
             id={id} 
             className='tileHidden'>
             {name}
           </div> 
        </div>
    )
}

export default Tile
