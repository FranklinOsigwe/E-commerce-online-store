import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/not-found" element={<NotFound/>}/>
          <Route path="/" exact element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
