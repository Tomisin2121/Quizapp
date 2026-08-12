import React from 'react'
import './Cards.css'
export default function Cards({ questionData, onAnswer }){
  const [selected, setSelected] = React.useState(null)

  React.useEffect(() => {
    setSelected(null)
  }, [questionData])

  function handleClick(option) {
    if (selected) return

    const isCorrect = option === questionData.correctAnswer
    setSelected(option)
    onAnswer(isCorrect)
  }

  function getButtonClass(option) {
    if (!selected) return "option-btn"
    if (option === questionData.correctAnswer) return "option-btn correct"
    if (option === selected) return "option-btn incorrect"
    return "option-btn disabled"
  }

  return(
    <div className="card">
      <h2>{questionData.question}</h2>
      <div className="options">
        {questionData.options.map((option) => (
          <button
            key={option}
            className={getButtonClass(option)}
            onClick={() => handleClick(option)}
            disabled={!!selected}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}