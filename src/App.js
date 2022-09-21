import { lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Home, Login } from "./Components";
import Header from "./Components/Header";
import Auth from "./Components/Auth";
import Register from "./Components/registerSystem/Register";
import { AnimatePresence, motion } from "framer-motion";
import Motion from "./Components/Motion";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { Home, Login, Header, Register, Auth } from "./Components/index";

function App() {
  // const location = useLocation();
  const pageTransition = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  return (
    <>
      <Header />
      <BrowserRouter>
        <AnimatePresence>
          <Routes>
            <Route
              path="/login"
              element={
                <Motion>
                  <Login />
                </Motion>
              }
            />
            <Route
              path="/register"
              element={
                <Motion>
                  <Register />
                </Motion>
              }
            />
            <Route
              path="/"
              element={
                <Motion>
                  <Auth>
                    <Home />
                  </Auth>
                </Motion>
              }
            />
            <Route
              path="/"
              element={
                <Motion>
                  <Auth>
                    <Home />
                  </Auth>
                </Motion>
              }
            />
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;
