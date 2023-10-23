import React, { useState } from 'react';
import Login from './Login';
import Logout from './Logout';
import './LoginCard.css'

const LoginCard = () => {
    const [user, setUser] = useState(null)
  return (
    <div className='loginCardRed'>LoginCard
        {user ? <div>
            <Logout setUser={setUser}/>
        </div> : <div>
        <Login setUser={setUser} />
        </div> }
    </div>
  )
}

export default LoginCard