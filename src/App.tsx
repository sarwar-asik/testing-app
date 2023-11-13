import "./App.css";
import FruitsList from "./components/Fruits/FruitsList";
import { fruits } from "./const/fruits";

function App() {
  return (
    <div className="">
      Hello World
      <FruitsList fruits={fruits} />
    </div>
  );
}

export default App;
