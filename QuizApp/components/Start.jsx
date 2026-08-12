import './Start.css'
export default function Start({onStart}){
    return(
        <div className='start'>
            <button className="start-button" onClick={onStart}>Start</button>
        </div>
    )
}