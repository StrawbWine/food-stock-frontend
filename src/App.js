import "./App.css"
import AddFoodTypeForm from "./components/AddFoodTypeForm/AddFoodTypeForm"
import FoodContainer from "./components/FoodContainer/FoodContainer"
import Header from "./components/Header/Header"
import useApi from "./hooks/useApi"

// const bpp = {
//   name: "Billy's Pan Pizza",
//   calories: 250,
//   weight: 170,
// }

// const jarlsberg = {
//   name: "Jarlsberg",
//   calories: 400,
//   weight: 700,
// }

// const initialFoodTypes = [bpp, jarlsberg]

function App() {

  //const [foodTypes, setFoodTypes] = useState(initialFoodTypes)
  const API_URL = process.env.REACT_APP_API_URL

  const [foodTypes, getFoodTypes] = useApi(`${API_URL}/foodtypes`)

  // const [foodTypes, setFoodTypes] = useState([])

  // const fetchFoodTypes = async () => {
  //   try {      
  //     const result = await axios.get(`${API_URL}/foodtypes`)      
  //     setFoodTypes(result.data)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => fetchFoodTypes, [foodTypes])

  // const handleFoodSubmit = async event => {
  //   event.preventDefault()
  //   const newFoodType = {
  //     name: document.getElementById("foodName").value,
  //     description: document.getElementById("description").value,
  //     kcalPerHundredGrams: document.getElementById("calories").value,
  //     weightInGrams: document.getElementById("weight").value,
  //   }    
  //   await axios.post(`${API_URL}/foodtypes`, newFoodType)    
  //   fetchFoodTypes()
  // }

  return (
    <div className="App">
      <Header />
      <FoodContainer def={foodTypes} getFoodTypes={getFoodTypes} />
      <AddFoodTypeForm getFoodTypes={getFoodTypes} />
    </div>
  )
}

export default App
