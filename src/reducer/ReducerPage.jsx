import { useReducer } from "react";


const initialState={
    color:"red",
    text:"hello"
}

const reducer=(state, action)=>{


    switch(action.type){
        case "color":
            return {...state, color:action.payload}
        case "text":
            return {...state, text:action.payload}
        default:
            return state

    }
}


const colors=["red", "blue", "green", "yellow", "black", "white"];

const ReducerPage = () => {

const randomColour=()=>{

    const randomColor= colors[Math.floor(Math.random()*colors.length)]

    dispatch({type:"color", payload:randomColor})
}

const [state, dispatch]=useReducer(reducer, initialState);
console.log(state, "state")
  return (
    <div className="reducerPage">
      <h1>useReducer </h1>
      <h2> it is used for the component level heavy state management</h2>
      <button style={{color: state.color}} onClick={randomColour}>color Change</button>
      <button onClick={()=>dispatch({type:"text", payload:"text changed"})}>{state.text}</button>
    </div>
  );
};

export default ReducerPage;
