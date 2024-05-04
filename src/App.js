import "./App.css";
import Layout from "./layout";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import useStore from "./hooks/useStore";
import { useEffect } from "react";
import Login from "./pages/auth/login"

function App() {
  const appThemeColor = useStore((state) => state.appThemeColor);
  const setAppThemeColor = useStore((state) => state.setAppThemeColor);

  useEffect(() => {
    setAppThemeColor("redish")
  }, [])

  return (
    <div className={`bg-theme-secondaryBg ${appThemeColor}`}>
      {/* Main layout */}
      <Layout>

        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<div>Register</div>} />
            <Route path="*" element={<div>error;</div>} />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
