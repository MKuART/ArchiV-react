import { useEffect } from 'react'
import { useState} from 'react'
import './Footer.css'

const Watch = () => {
    const [dateTime, setDateTime] = useState(new Date().toUTCString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(new Date().toUTCString())

        }, 1000)
        return () => clearInterval(intervalId)
    }, []);

  return (
    <div className='timeContainer'>{dateTime}</div>
  )
}

export default Watch