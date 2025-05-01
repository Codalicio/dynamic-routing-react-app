import { BrowserRouter, Routes, Route } from "react-router";
import Student from "./pages/Student";
import Home from "./pages/Home";
import { useState } from "react";
import "./index.css";

function App() {
  const [user, setUser] = useState("");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home user={user} setUser={setUser} />} />
          <Route path="/:userName" element={<Student />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
