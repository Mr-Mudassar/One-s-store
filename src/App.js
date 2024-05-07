import "./App.css";
import Layout from "./layout";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import useStore from "./hooks/useStore";
import Login from "./pages/auth/login";
import Stores from "./pages/stores";
import { useEffect } from "react";

function App() {
  const appThemeColor = useStore((state) => state.appThemeColor);
  const setAppThemeColor = useStore((state) => state.setAppThemeColor);

  useEffect(() => {
    if (appThemeColor === "") {
      setAppThemeColor("redish");
    }
  }, []);

  return (
    <div className={`${appThemeColor} bg-theme-secondaryBg `}>
      {/* Main layout */}
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="*" element={<div>error;</div>} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
