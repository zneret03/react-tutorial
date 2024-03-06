import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const arrays = [1, 2, 3, 4, 5]
  const objects = {
    name: 'Ian',
    lastName: 'Drilon'
  }

  const arrayOfObjects = [
    {
      name: 'Ian',
      lastName: 'Drilon'
    },
    {
      name: 'John',
      lastName: 'Doe'
    }
  ]
  

  return (
    <>
      {arrays.map((item) => (
        <Button btnName={item}/>
      ))}

      <Button btnName={objects.lastName}/>

      {arrayOfObjects.map(({name, lastName}) => (
      <Button btnName={lastName}/>
      ))}
    </>
  )
}

export default App
