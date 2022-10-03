import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from './components/card/card';
import Home from './components/home/home';

function App() {
  return (
   <>
   <Routes>
     {/* <Route path="/card" element={<Card />} /> */}
     <Route path="/home" element={<Home />} />
   </Routes>
   </>
  );
}

export default App;
