import './countDisplay.css'
export default function CountDisplay ({ timerDays, timerHours, timerMinutes, timerSeconds }) {
  return (
    <div className='display'>
      <div>
        <p>{timerDays}</p>
        <p><small>Days</small></p>
      </div>
      <span>:</span>
      <div>
        <p>{timerHours}</p>
        <p><small>Hours</small></p>
      </div>
      <span>:</span>
      <div>
        <p>{timerMinutes}</p>
        <p><small>Minutes</small></p>
      </div>
      <span>:</span>
      <div>
        <p>{timerSeconds}</p>
        <p><small>seconds</small></p>
      </div>
    </div>
  )
}
