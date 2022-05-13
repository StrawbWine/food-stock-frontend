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

const foodTypes = [bpp, jarlsberg]

function App() {
  return (
    <div className="App">
      <Header />
      <FoodContainer def={foodTypes} />
      <AddFoodTypeForm />
    </div>
  )
}

export default App
