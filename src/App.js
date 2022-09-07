import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Landing from "./Containers/Landing";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<h1>About</h1>} />
                <Route path="/projects" element={<h1>Projects</h1>} />
                <Route path="/contact" element={<h1>Contact</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
