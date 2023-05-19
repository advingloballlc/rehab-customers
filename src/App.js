import "./App.css";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Home from "./components/Home/Home";
import PatientsPage from "./components/PatientsPage/PatientsPage";
import AppBar from "./components/AppBar/AppBar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
        </Route>
        <Route
          path="/patients"
          element={
            <PrivateRoute>
              <PatientsPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
