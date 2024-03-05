import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
function App() {
  const store = useSelector((store) => store);
  console.log("store :", store);

  return (
    <>
      <Header />
      <SignIn />
      <SignUp/>
    </>
  );
}

export default App;
