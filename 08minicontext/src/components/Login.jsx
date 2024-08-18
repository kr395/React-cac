import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/userContext'

function Login() {
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")
   const {setUser} = useContext(UserContext)
  return (
    <div>
    <h2>Login</h2>
     
        <input type="text" placeholder="Username" value={username} onChange={(e)=>{
          setUsername(e.target.value) // Update the username state with the entered value
        }}/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={(e)=>{
          e.preventDefault() // Prevent form submission
          setUser({username, password}) // Update the user state with the entered username

        }}>Login</button>
     
    </div>
  )
}

export default Login