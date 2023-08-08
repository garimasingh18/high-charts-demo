import { BrowserRouter, Routes, Route } from "react-router-dom";
import Spline from "./pages/Spline";
import Line from "./pages/Line";
import Pie from "./pages/Pie";
import Bubble from "./pages/Bubble";
import Home from "./pages/Home";
import Map from "./pages/Map";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Nav
        activeKey="/"
        onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/bubble">Bubble</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/line">Line</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/pie">Pie</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/spline">Spline</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/map">Map</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Not available
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spline" element={<Spline />} />
          <Route path="/line" element={<Line />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/bubble" element={<Bubble />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
