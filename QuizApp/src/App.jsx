import React from 'react'
import Start from '../components/Start'
import Cards from '../components/Cards'
import './App.css'
import { quizData } from '../components/quizData.js'
export default function App(){
  const [currentIndex, setCurrentIndex]= React.useState(0)
  const [score, setScore] = React.useState(0)
  const [gameState, setGameState] = React.useState('not-started')
  function handleAnswer(isCorrect){
    if(isCorrect){
      setScore((prev)=> prev + 1)
    }
    setTimeout(() =>{
      if(currentIndex + 1 < quizData.length){
        setCurrentIndex((prev) => prev + 1)
      } else {
        setGameState('finished')
      }
    }, 1200)
  }
  return(

    <div>
      {gameState === 'not-started'&& <Start onStart={() => setGameState('in-progress')} />}
      {gameState === 'in-progress'&& <Cards questionData={quizData[currentIndex]}
                                            onAnswer={handleAnswer} />}
    </div>
  )
}