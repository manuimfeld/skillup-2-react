import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login } from "./components";
import Header from "./components/Header";
import Register from "./components/registerSystem/Register";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
