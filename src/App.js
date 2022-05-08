import "./App.css"
import FoodType from "./components/FoodType/FoodType"

function App() {
  return (
    <div className="App">
      <FoodType
        foodName={"Billy's Pan Pizza"}
        foodCals={450}
        foodWeight={170}
      />
    </div>
  )
}

export default App
