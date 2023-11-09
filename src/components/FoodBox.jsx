import { useState } from "react";
function FoodBox(props) {
  
    const [name, setTitle] = useState("");
  const deleteFood=(el)=>{
    el.newList();

  }
  return (
    <div>
        
      <p>{props.food.name}</p>

      <img src={props.food.image} 
      height="100px"
      width="auto"/>

      <p>Calories: {props.food.calories}</p>
      <p>Servings: {props.food.servings}</p>

      <p>
        <b>
          Total Calories: ({props.food.servings * props.calories}){" "}
        </b>{" "}

        kcal
      </p>

      <button onClick={deleteFood}>Delete</button>
    </div>
  );
}

export default FoodBox;
