import { useState, useRef, useEffect } from "react"


export default function Login({ setUser }) {
  const [error, setError] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const userNameRef = useRef("");
  const passwordRef = useRef("");

  function checkLogin() {
    if (username !== "root") { return setError("Wrong username") }
    if (password === "1234") { return setError("That's the old password") }
    if (password !== "toor") { return setError("Wrong password") }

    setUser(username)
  }

  useEffect(() => {
    if(error === "Wrong Username") {
      return userNameRef.current.focus();
    }
    if(error === "Thats the old password") {
      return passwordRef.current.focus();
    }
    if(error === "Wromg password") {
    return passwordRef.current.focus()
    }
  }, [])

  return (
    <div className="loginCardContainer">
      <p className="error ">{error}</p>

      <label>
        User :
        <input
            className="inputLogin"
          type="text"
          value={username}
          onChange={e=>setUsername(e.target.value)}
          ref={userNameRef}
          autoFocus={true}
        />
      </label>

      <label>
        Password :
        <input
          type="password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
          ref={passwordRef}
        />
      </label>

      <button onClick={checkLogin}>
        Login
      </button>

      <p className="error">{error}</p>
    </div>
  )

}