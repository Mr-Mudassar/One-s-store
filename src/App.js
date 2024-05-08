import "./App.css";
import Layout from "./layout";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/auth/login";
import Stores from "./pages/stores";

function App() {

  return (
    <div className={`bg-theme-secondaryBg `}>
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
