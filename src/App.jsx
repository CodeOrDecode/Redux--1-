import { legacy_createStore } from "redux";
const INCREMENT = "INCREMENT";
import { useDispatch, useSelector } from "react-redux";

const formdata=(state,action)=>{
  switch(action.type){
    case INCREMENT:{
      return state+1;
    }
    default:{
      return state;
    }
  }

}

export const store = legacy_createStore(formdata, 0);


function App() {

  const data = useSelector((store)=>{
    return store;
  })

  const dispatch = useDispatch();
  function handleIncrement() {
    dispatch({ type: INCREMENT });
  }

  return (
    <>
      <pre>{JSON.stringify(data)}</pre>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
}

export default App;
