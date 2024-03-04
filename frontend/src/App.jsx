import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(function(){
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    }).catch(function(error){
      console.log(error)
    })
  })

  return (
    <>
      <h1>this is the new app</h1>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((joke, index)=>(
            <div key={joke.id}>
              <h3>{joke.title}</h3>
            </div>
        ))
      }
    </>
  )
}

export default App
