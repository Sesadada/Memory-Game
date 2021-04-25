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
          <div className={!isWinning? 'tileHidden':'points'}>
            <p>{message}</p>
            <button className={isWinning? 'playBtn':'tileHidden'} onClick={playAgain}>Shuffle and play again</button>
         </div>
         <div className={isWinning? 'tileHidden':'points'}>
           <p> Attempts: {played} </p>     
           <p>{message} Couples found: {gained}</p>
        </div>
            
        </div>
    )
}

export default Header
