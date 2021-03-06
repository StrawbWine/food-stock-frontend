import { useState } from "react"
import axios from "axios"

import "./App.css"
import FoodInstanceContainer from "./components/FoodInstanceContainer/FoodInstanceContainer"
import Header from "./components/Header/Header"
import useApi from "./hooks/useApi"
import FoodTypePanel from "./components/FoodTypePanel/FoodTypePanel"
import Sidebar from "./components/Sidebar/Sidebar"

function App() {
  const API_URL = process.env.REACT_APP_API_URL

  const [foodTypes, getFoodTypes, setFoodTypes] = useApi(`${API_URL}/foodtypes`)
  const [foodInstanceData, setFoodInstanceData] = useState(null)
  const [activeFoodType, setActiveFoodType] = useState(null)
  const [activeFoodGroup, setActiveFoodGroup] = useState(null)

  const getFoodTypesByFoodGroup = async foodGroup => {
    try {      
      const result = await axios.get(`${API_URL}/foodtypes?food_group=${foodGroup.replace(" ", "+")}`)   
      setFoodTypes(result.data)
    } catch (error) {
      console.error(error);
    }
  }

  // const testInstances = [
  //   {
  //     id: 1,
  //     foodType: "Pizza",
  //     purchaseDate: "2022-05-10",
  //     expirationDate: "2023-05-10"
  //   },
  //   {
  //     id: 2,
  //     foodType: "Jarlsberg",
  //     purchaseDate: "2022-05-10",
  //     expirationDate: "2023-05-10"
  //   },
  // ]

  const getFoodInstances = async foodTypeName => {    
      try {      
        const result = await axios.get(`${API_URL}/foodinstances?food_type_name=${foodTypeName}`)   
        setFoodInstanceData(result.data)
      } catch (error) {
        console.error(error);
      }
  }

  const selectFoodType = foodTypeName => {
    setActiveFoodType(foodTypeName)
    getFoodInstances(foodTypeName)
  }

  return (
    <div className="App">
      <Sidebar getFoodTypesByFoodGroup={getFoodTypesByFoodGroup}/>
      <div className="Main">
        <Header />      
        <FoodTypePanel
          activeFoodType={activeFoodType}
          foodTypes={foodTypes} 
          getFoodTypes={getFoodTypes} 
          selectFoodType={selectFoodType}
        />
        {foodInstanceData && activeFoodType &&
          <FoodInstanceContainer 
            activeFoodType={activeFoodType} 
            foodInstances={foodInstanceData} 
            getFoodInstances={getFoodInstances} 
          />}
      </div>

    </div>
  )
}

export default App
