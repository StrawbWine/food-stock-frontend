import { useState } from "react"

import "./App.css"
import AddFoodTypeForm from "./components/AddFoodTypeForm/AddFoodTypeForm"
import FoodContainer from "./components/FoodContainer/FoodContainer"
import FoodInstanceContainer from "./components/FoodInstanceContainer/FoodInstanceContainer"
import Header from "./components/Header/Header"
import useApi from "./hooks/useApi"

function App() {
  const API_URL = process.env.REACT_APP_API_URL

  const [foodTypes, getFoodTypes] = useApi(`${API_URL}/foodtypes`)
  const [foodInstanceData, setFoodInstanceData] = useState(null)

  const testInstances = [
    {
      id: 1,
      foodType: "Pizza",
      purchaseDate: "2022-05-10",
      expirationDate: "2023-05-10"
    },
    {
      id: 2,
      foodType: "Jarlsberg",
      purchaseDate: "2022-05-10",
      expirationDate: "2023-05-10"
    },
  ]

  const handleFoodTypeClick = foodTypeName => {
    setFoodInstanceData(testInstances)
  }

  return (
    <div className="App">
      <Header />
      <FoodContainer foodTypes={foodTypes} getFoodTypes={getFoodTypes} handleFoodTypeClick={handleFoodTypeClick} />
      <AddFoodTypeForm getFoodTypes={getFoodTypes} />
      {foodInstanceData && <FoodInstanceContainer foodInstances={foodInstanceData} />}
    </div>
  )
}

export default App
