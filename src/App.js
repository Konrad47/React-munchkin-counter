import { useState } from "react"
import Header from "./components/Header"
import Players from "./components/Players"
import AddPlayer from "./components/AddPlayer"

function App() {
  const [players, setPlayers] = useState([])

  const addPlayer = (player) => {
    const id = Math.floor(Math.random() * 10000) +1
    const newPlayer = {id, ...player}
    setPlayers([ ...players, newPlayer])
  }

  const deletePlayer = (id) => {
    setPlayers(players.filter((player) => player.id !== id))
  }

  const addLevel = (id) => {
    setPlayers(players.map((player) =>
      player.id === id ? {
        ...player, level:
          player.level + 1
      } : player
    ))
  }

  const addStrength = (id) => {
    setPlayers(players.map((player) =>
      player.id === id ? {
        ...player, strength:
          player.strength + 1
      } : player
    ))
  }

  const minusLevel = (id) => {
    setPlayers(players.map((player) =>
      player.id === id ? {
        ...player, level:
          player.level - 1
      } : player
    ))
  }

  const minusStrength = (id) => {
    setPlayers(players.map((player) =>
      player.id === id ? {
        ...player, strength:
          player.strength - 1
      } : player
    ))
  }
  

  return (
    <div className="container">
      <Header />
      < AddPlayer onAdd={addPlayer} />
      <Players players={players}
        onAddLevel={addLevel}
        onAddStrength={addStrength}
        onMinusLevel={minusLevel}
        onMinusStrength={minusStrength}
        onDelete={deletePlayer}
      />
    </div>
  )
}

export default App;