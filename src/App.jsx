import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";

function App() {
  const store = useSelector((store) => store);
  console.log("store :", store);

  return (
    <Header/>
    // <h2 className="text-center">Book Share App</h2>
  
  );
}

export default App;
