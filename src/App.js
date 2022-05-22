import "./App.css"
import AddFoodTypeForm from "./components/AddFoodTypeForm/AddFoodTypeForm"
import FoodContainer from "./components/FoodContainer/FoodContainer"
import Header from "./components/Header/Header"
import useApi from "./hooks/useApi"

function App() {
  const API_URL = process.env.REACT_APP_API_URL

  const [foodTypes, getFoodTypes] = useApi(`${API_URL}/foodtypes`)

  return (
    <div className="App">
      <Header />
      <FoodContainer def={foodTypes} getFoodTypes={getFoodTypes} />
      <AddFoodTypeForm getFoodTypes={getFoodTypes} />
    </div>
  )
}

export default App
