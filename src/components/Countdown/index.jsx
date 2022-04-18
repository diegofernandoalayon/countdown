import { useState, useRef } from "react"
export default function CountDown(){
  const [timerSeconds, setTimerSeconds] = useState('00')
  let interval = useRef()

  const startTimer = ()=>{
    // const countdownTime = (new Date().getTime())+(50*1000)
    const countdownTime = new Date('May 30, 2022 00:00:00').getTime()

    interval = setInterval(()=>{
      const now = new Date().getTime()
      const distance = countdownTime - now
      console.log('hola')
      console.log(distance)
      // setI(i+1)
      // console.log(i)
      //se puede coger la fecha del momento y sumarle el tiempo indicado, y luego a ese momento futuro que se generaria empezar a hacerle el proceso de restar

      // o poner el tiempo como un valor y tener en cuenta cuantos segundos se le quitan a ese valor

      const seconds = Math.floor((distance %(1000*60))/1000)
      if(distance<0){
        clearInterval(interval.current)
      }else{
        setTimerSeconds(seconds)
      }
    },1000)
  }
return (
  <>
    <h2>{timerSeconds}</h2>
    <button onClick={startTimer}>iniciar</button>
    <button onClick={()=>console.log('todo')}>paustar</button>
    
  </>
)
}