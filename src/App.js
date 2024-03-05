import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./layout";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="*" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
