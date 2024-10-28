import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Courses from "./components/Courses"; // Make sure to create these components
import Assignments from "./components/Assignments";
import Timetable from "./components/Timetable";
import Forum from "./components/Forum";
import Settings from "./components/Settings";
import "./css/App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
