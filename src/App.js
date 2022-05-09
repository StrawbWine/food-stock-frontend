import "./App.css"
import FoodType from "./components/FoodType/FoodType"

const bpp = {
  name: "Billy's Pan Pizza",
  calories: 450,
  weight: 170,
}

function App() {
  return (
    <div className="App">
      <FoodType def={bpp} />
    </div>
  )
}

export default App
