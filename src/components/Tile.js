const Tile = (props) => {

    return (
        <div name={props.name} className='tile' onClick={props.onClick}> 
           <div  id={props.id} name={props.name} className='tileHidden'>{props.name}</div> 
        </div>
    )
}

export default Tile
/*
    const [isHidden, setIsHidden] = useState(true)
    let vis = isHidden ? 'true': 'none'
    const changes = () => {
        console.log('working')
        //setIsHidden(false)
    }

    <div onClick={changes}>   
    </div>

*/