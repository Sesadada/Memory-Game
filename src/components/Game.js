import {useState, useEffect} from 'react'
import Grid from './Grid'
import Header from './Header'
import imagesArr from './images/images'

const Game = () => {
    const [gained, setGained] = useState(0)
    const [played, setPlayed] = useState(0)
    const [cardsArray, setCardsArray] = useState(imagesArr)
    const [counter, setCounter] = useState(0)
    const [message, setMessage] = useState(null)
    const [foundCouples, setFoundCouples] = useState(null)
    const [isVisible, setIsVisible] = useState({
        divOne: '',
        divTwo:''
      })

    const updateCounter = () => {
      setCounter(0)
    }
  
    const randomClick = (e) => {
      setMessage(null)
      if(counter === 0 || isVisible.divTwo !== '') {
        if(isVisible.divTwo){
        isVisible.divOne.className = 'tileHidden'
        isVisible.divTwo.className = 'tileHidden'
        setIsVisible({
          divOne: '',
          divTwo: ''
        })
        updateCounter()
      }
        e.target.firstChild.className = 'tileVisible'
        setCounter(counter+1)
        setIsVisible(prevState => ({...prevState, divOne: e.target.firstChild
      }))} else if (counter === 1  && e.target.id !== isVisible.divOne.id){ 
        e.target.firstChild.className = 'tileVisible'
        setIsVisible(prevState => ({...prevState, divTwo: e.target.firstChild  
        }))
        setCounter(0)
        setPlayed(played + 1)
  
    } 
  }   
  
  useEffect(() => {
    if((isVisible.divOne !== '') && isVisible.divOne.textContent === isVisible.divTwo.textContent && isVisible.divOne.id !== isVisible.divTwo.id){
      setGained(gained + 1)
      setMessage('You found a couple! ')
      setFoundCouples(prevState => ({...prevState, [`${isVisible.divOne.textContent}A`]: isVisible.divOne, [`${isVisible.divOne.textContent}B`]: isVisible.divTwo}))
      isVisible.divOne.className='tileVisibleFound'
      isVisible.divTwo.className='tileVisibleFound'
      } 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible])
  
  return (
      <div className="App">
      <Header 
      isVisible={isVisible}
      setGained= {setGained} 
      setPlayed={setPlayed}
      setMessage={setMessage}
      updateCounter={updateCounter}
      setIsVisible={setIsVisible}
      setFoundCouples={setFoundCouples}
      setCardsArray={setCardsArray}
      message={message}
      played={played}
      gained={gained}
      cardsArray={cardsArray}
      />
  
      <div className='gridBox'>
        <Grid found={foundCouples} clicking={randomClick} imagesArr={cardsArray} color='tile'/>
      </div>
      </div>
    );
  }
  export default Game;
  /*
      <h1>Memory Game</h1>
      <div className={!isWinning? 'tileHidden':'points'}>
      <p >{message}</p>
      <button className={isWinning? 'playBtn':'tileHidden'} onClick={playAgain}>Shuffle and play again</button>
      </div>
      <div className={isWinning? 'tileHidden':'points'}>
      <p> Attempts: {played} </p>     
      <p>{message} Couples found: {gained}</p>
      </div>
  */
  
  /*
  if(gained === 8){
    setIsWinning(true)
    setMessage(`You found 8 pairs of cards in ${played} attempts!`)
    setGained(0)
    isVisible.divOne.className = 'tileHidden'
    isVisible.divTwo.className = 'tileHidden'
  }
  
  const playAgain = () => {
    setGained(0)
    setPlayed(0)
    setIsWinning(false)
    setMessage(null)
    updateCounter()
    setInitialColor('tile')
    setIsVisible({
      divOne: '',
      divTwo:''
    })
    setFoundCouples(null)
    const newArr = cardsArray.sort(() => (Math.random() > .5) ? 1 : -1)
    setCardsArray(newArr)
  }
  */
