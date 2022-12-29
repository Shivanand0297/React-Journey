import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { 
  BrowserRouter, 
  Navigate, 
  Route, 
  Routes,
  
} from "react-router-dom";
import App from "./App";
import User from "./components/User";
import NotFound from "./components/NotFound";
import Learn from "./components/Learn";
import Courses from "./components/Courses";
import Bundles from "./components/Bundles"
import CourseID from "./components/CourseID";
import Dashboard from "./components/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/element" element={<h1>This is element</h1>} />
        <Route path="/myapps" element={<Navigate replace to="/learn" />} /> {/* to redirect */}
        <Route path="/learn" element={<Learn/>}>
            <Route path="courses"  element={<Courses/>}>
                <Route path=":courseID" element={<CourseID/>} />
            </Route>
            <Route path="bundle"  element={<Bundles/>} />
        </Route>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
);


reportWebVitals();
