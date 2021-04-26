import {useState, useEffect} from 'react'

const Header = (props) => {
    const [isWinning, setIsWinning] = useState(false)
    const {setGained, setPlayed, message, setMessage,
    updateCounter, setIsVisible, setFoundCouples, setCardsArray, 
    played, gained, cardsArray, isVisible} = props
    
    useEffect(()=> {
        if(gained === 8){
            setIsWinning(true)
            setMessage(`You found 8 pairs of cards in ${played} attempts!`)
            setGained(0)
            isVisible.divOne.className = 'tileHidden'
            isVisible.divTwo.className = 'tileHidden'
          }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[gained])

    
    const playAgain = () => {
        setGained(0)
        setPlayed(0)
        setIsWinning(false)
        setMessage(null)
        updateCounter()
        setIsVisible({
          divOne: '',
          divTwo:''
        })
        setFoundCouples(null)
        const newArr = cardsArray.sort(() => (Math.random() > .5) ? 1 : -1)
        setCardsArray(newArr)
      }


    return (
        <div>
          <h1>Memory Game</h1>
          <p className='explication'>Find the 8 couple of names by uncovering 2 cards at the time</p>
          <div className={!isWinning? 'tileHidden':'points'}>
            <p >{message}</p>
            <button className={isWinning? 'playBtn':'tileHidden'} onClick={playAgain}>Shuffle and play again</button>
         </div>
         <div className={isWinning? 'tileHidden':'points'}>
           <p className='attempts'> Attempts: {played} </p>     
           <p className='couples'><b style={{color:'#062af8'}}>{message}</b> Couples found: {gained}</p>
        </div>
            
        </div>
    )
}

export default Header
