import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home,Login,Register} from "./Components"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
