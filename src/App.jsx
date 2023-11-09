import foodsJson from "./foods.json";
import "./App.css";
import { useState } from "react";
import FoodBox from "./components/FoodBox";

function App() {
  const [foodToDisplay, setFoodsToDisplay]=useState(foodsJson)
  const[name, setName]=useState("");

  const deleteFood=(foodName)=>
  const newList=foodToDisplay.filter((foodDetails)=>{

  return (
    <div>
    {foodsJson.map((el)=> {

return(
  
              <FoodBox 
              food={el}
               key={el.id}
              /> 
);
    })}
       </div>
             
  );
})}
            

  
export default App;
