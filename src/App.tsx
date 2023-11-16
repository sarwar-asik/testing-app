import "./App.css";
import FruitsList from "./components/Fruits/FruitsList";
import { fruits } from "./const/fruits";

function App() {
  return (
    <div className="">
     <h2>Our Fruits List  </h2>
      <FruitsList fruits={fruits} />
    </div>
  );
}

export default App;
