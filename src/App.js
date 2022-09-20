import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Login, Header, Register, Auth } from "./Components/index";
=======
import { Home, Login, Header, Register } from "./Components/index";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Auth><Home /></Auth>} />
          <Route path="/inicio" element={<Auth><Home /></Auth>} />
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
