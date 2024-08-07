import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Navbar/>
       {/* <Route path="/" element={<Login/>}/>
       <Route path="/login" element={<Login/>}/>
        */}
    </BrowserRouter>
    </div>
  );
}

export default App;
