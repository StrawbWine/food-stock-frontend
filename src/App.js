import "./App.css"
import FoodType from "./components/FoodType/FoodType"
import FoodContainer from "./components/FoodContainer/FoodContainer"

const bpp = {
  name: "Billy's Pan Pizza",
  calories: 250,
  weight: 170,
}

const jarlsberg = {
  name: "Jarlsberg",
  calories: 400,
  weight: 700,
}

const foodTypes = [bpp, jarlsberg]

function App() {
  return (
    <div className="App">
      <FoodContainer def={foodTypes} />
    </div>
  )
}

export default App
