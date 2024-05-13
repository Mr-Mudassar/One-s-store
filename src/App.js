import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import useStore from "./hooks/useStore";

import Dashboard from "./pages/dashboard";
import Login from "./pages/auth/login";
import Stores from "./pages/stores";
import PrivateRoutes from "./routes/privateRoutes";
import PublicRoutes from "./routes/publicRoutes";
import Callback from "./pages/callback";
import Orders from "./pages/orders";

function App() {
  const appThemeColor = useStore((state) => state.appThemeColor);
  const appMode = useStore((state) => state.appMode);
  const setAppMode = useStore((state) => state.setAppMode);

  // Check the system default theme and apply on app
  useEffect(() => {
    CheckTheme();
    document.documentElement.classList.add(appThemeColor);
  }, [appThemeColor]);

  const CheckTheme = () => {
    if (appMode === "") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
        setAppMode("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setAppMode("light");
      }
    } else if (appMode !== "" && appMode === "dark") {
      document.documentElement.classList.add("dark");
      setAppMode("dark");
    } else if (appMode !== "" && appMode === "light") {
      document.documentElement.classList.remove("dark");
      setAppMode("light");
    }
  };

  return (
    <div className={`bg-theme-secondaryBg `}>
      <Router>
        <Routes>
          {/* Not found (404) route */}
          <Route path="*" element={<div className="flex text-center items-center text-3xl">Not found</div>} />

          {/* Public routes */}
          <Route path="/auth" element={<PublicRoutes />}>
            <Route path="login" element={<Login />} />
          </Route>

          {/* Private routes */}
          <Route path="/" element={<PrivateRoutes />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="stores" element={<Stores />} />
            <Route path="orders" element={<Orders />} />
            <Route path="callback" element={<Callback />} />
          </Route>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
