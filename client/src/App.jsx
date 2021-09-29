//HOC
import HomeLayoutHOC from "./HOC/Home.HOC";

//Component
import Temp from "./Components/temp";
import HomeLayout from "./Layout/Home.layout";

function App() {
  return (
    <>
    <HomeLayoutHOC path="/" exact component ={Temp} />
   
    </>
  );
}

export default App;
