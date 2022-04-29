import { useState, useRef, useEffect } from "react"
import CountDisplay from "../CountDisplay"
export default function CountDown(){
  const [timerSeconds, setTimerSeconds] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerDays, setTimerDays] = useState('00')
  let interval = useRef()

  const startTimer = ()=>{
    // const countdownTime = (new Date().getTime())+(50*1000)
    const countdownTime = new Date('May 30, 2022 00:00:00').getTime()

    interval = setInterval(()=>{
      const now = new Date().getTime()
      const distance = countdownTime - now
      
      const days = Math.floor(distance / (1000*60*60*24))
      const hours = Math.floor((distance %(1000*60*60*24))/(1000*60*60))
      const minutes = Math.floor((distance %(1000*60*60))/(1000*60))
      const seconds = Math.floor((distance %(1000*60))/1000)
      if(distance<0){
        clearInterval(interval.current)
      }else{
        setTimerSeconds(seconds)
        setTimerMinutes(minutes)
        setTimerHours(hours)
        setTimerDays(days)
      }
    },1000)
  }
  useEffect(()=>{
    startTimer()
    return () => clearInterval(interval)
  })
return (
  <>
    {/* <h2>{timerDays}:{timerHours}:{timerMinutes}:{timerSeconds}</h2> */}
    <CountDisplay 
      timerDays={timerDays} 
      timerHours={timerHours} 
      timerMinutes={timerMinutes} 
      timerSeconds={timerSeconds}/>
    {/* <button onClick={startTimer}>iniciar</button>
    <button onClick={()=>console.log('todo')}>paustar</button> */}
    
  </>
)
}