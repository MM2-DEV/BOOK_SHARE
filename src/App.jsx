import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const store = useSelector((store) => store);
  console.log("store :", store);

  return <h2 className="text-center">Book Share App</h2>;
}

export default App;
