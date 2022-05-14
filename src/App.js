import {useState} from "react"

import "./App.css"
import AddFoodTypeForm from "./components/AddFoodTypeForm/AddFoodTypeForm"
import FoodContainer from "./components/FoodContainer/FoodContainer"
import Header from "./components/Header/Header"

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

const initialFoodTypes = [bpp, jarlsberg]

function App() {

  const [foodTypes, setFoodTypes] = useState(initialFoodTypes)

  const handleFoodSubmit = event => {
    event.preventDefault()
    const newFoodType = {
      name: document.getElementById("foodName").value,
      calories: document.getElementById("calories").value,
      weight: document.getElementById("weight").value,
    }
    setFoodTypes([newFoodType, ...foodTypes])
  }

  return (
    <div className="App">
      <Header />
      <FoodContainer def={foodTypes} />
      <AddFoodTypeForm  handleFoodSubmit={handleFoodSubmit} />
    </div>
  )
}

export default App
