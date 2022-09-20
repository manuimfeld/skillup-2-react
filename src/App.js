import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, Login } from "./Components";
import Header from "./Components/Header";
import Auth from "./Components/Auth";
import Register from "./Components/registerSystem/Register";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { Home, Login, Header, Register, Auth } from "./Components/index";

function App() {
  const RequireAuth = ({ children }) => {
    if (!localStorage.getItem("token")) {
      return <Navigate to="/login" replace={true} />;
    }
    return children;
  };

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/inicio"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          /> */}
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <Auth>
                <Home />
              </Auth>
            }
          />
          <Route
            path="/inicio"
            element={
              <Auth>
                <Home />
              </Auth>
            }
          />
          <Route path="/" element={<Home />} />
          {/* <Route path="/inicio" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
