import React from 'react'
import Start from '../components/Start'
import Cards from '../components/Cards'
import './App.css'
export default function App(){
  const [gameState, setGameState] = React.useState('not-started')
  return(

    <div>
      {gameState === 'not-started'&& <Start/>}
      {gameState === 'in-progress'&& <Cards />}
    </div>
  )
}