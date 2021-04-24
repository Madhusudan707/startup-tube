import {useRef} from 'react'
import {useTimer} from '../../hooks'

export const Timer = ({ref}) => {
    const timer_value = useRef(null);
    const {timeLeft} = useTimer()
    return (
      <span ref={timer_value}>{timeLeft}</span>
    )
}
