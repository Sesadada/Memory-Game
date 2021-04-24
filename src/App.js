import './App.css';
import Grid from './components/Grid'
import React, {useState, useEffect} from 'react'
import imagesArr from './components/images/images'

const App = () => {
  const [gained, setGained] = useState(0)
  const [played, setPlayed] = useState(0)
  const [isVisible, setIsVisible] = useState({
    divOne: '',
    divTwo:''
  })
  const [cardsArray, setCardsArray] = useState(imagesArr)
  //const [isWinning, setIsWinning] = useState(false)
  const [counter, setCounter] = useState(0)
  const [message, setMessage] = useState(null)
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
        divTwo:''
      })
      updateCounter()
    }
      e.target.firstChild.className = 'tileVisible'
      setCounter(counter+1)
      
      setIsVisible(prevState => ({...prevState, divOne: e.target.firstChild
    }))} else if (counter === 1 && (!isNaN(e.target.firstChild.id))){
      e.target.firstChild.className = 'tileVisible'
      setIsVisible(prevState => ({...prevState, divTwo: e.target.firstChild  
      }))
      setCounter(0)
      setPlayed(played + 1)
  } 
}   
let result

useEffect(() => {
  if((isVisible.divOne !== '') && isVisible.divOne.textContent === isVisible.divTwo.textContent){
    console.log('you found a couple')
    setGained(gained+1)
    setMessage('you found a couple')
    }
}, [isVisible])

  console.log(isVisible)

  return (
    <div className="App">
    <h1>Memory Game</h1>
    <div className="points">
    <p>Played: {played}</p>     
    <p>{message} Gained: {gained}</p>
    </div>
    <div className='gridBox'>
      <Grid  clicking={randomClick} imagesArr={cardsArray}/>
    </div>
    </div>
  );
}
export default App;

/*
 && (parseInt(e.target.firstChild.id) !== parseInt(isVisible.divOne.id))

  if(counter === 2){
    console.log(2)
    setplayed(played+1)
    setCounter(counter-2)
    isVisible.divOne.className = 'tileHidden'
    isVisible.divTwo.className = 'tileHidden'
    setIsVisible({
      divOne: '',
      divTwo:''
    })
    
    setDisabled(true)
    setTimeout(()=> {
      setDisabled(false)
      isVisible.divOne.className = 'tileHidden'
      isVisible.divTwo.className = 'tileHidden'
      setIsVisible({
        divOne: '',
        divTwo:''
      })
    }, 3000
      )
  }
  */

