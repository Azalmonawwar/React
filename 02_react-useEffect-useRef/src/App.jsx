import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState('hello');

  const generatePassword = (length) => {
    let password = '';
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:",./<>?`~';

    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(password)
  }

  useEffect(() => {
    generatePassword(length)
  }, [length])


  return (
    <>
      {/* //password generator */}

      <div className="App">
        <h1>Password Generator</h1>
        <p>Your password is: {password}</p>
        <button onClick={() => setLength(length + 1)}>Increase Length</button>
        <button onClick={() => length >= 4 ? setLength(length - 1) : setLength(4)}>Decrease Length</button>
        <button onClick={() => setPassword(generatePassword(length))}>Generate Password</button>
        <button onClick={() => setPassword('')}>Clear Password</button>

      </div>
    </>
  )
}

export default App
