import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
function App() {
  const store = useSelector((store) => store);
  console.log("store :", store);

  return (
    <>
      <Header />
      <SignIn />
    </>
  );
}

export default App;
