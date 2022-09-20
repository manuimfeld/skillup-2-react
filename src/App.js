import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, Login } from "./Components";
import Header from "./Components/Header";
import Register from "./Components/registerSystem/Register";

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
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
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
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
