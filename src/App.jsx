import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Country from './components/countries'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div >

      <h1>React world Tour </h1>
      {/* <div style={{
        display:'gird',
        gridTemplateColumns:'repeate(3,1fr)'
      }}>      */}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', // Creates 3 equal columns
        gap: '10px' // Optional: adds spacing between grid items
      }}>

        <Country></Country>
      </div>




    </div>
  )
}

export default App
