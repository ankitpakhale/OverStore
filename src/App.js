import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import AddCustomer from "./Components/AddCustomer";
import Billing from "./Components/Billing";
import Contact from "./Components/Contact";
import Index from "./Components/Index";
import Login from "./Components/Login";
import Product from "./Components/Product";
import SingleBill from "./Components/SingleBill";

import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main className="py-3">
          <Routes>
            <Route path="/about" exact element={<About />} />
            <Route path="/addcustomer" exact element={<AddCustomer />} />
            <Route path="/billing" exact element={<Billing />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="" exact element={<Index />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/product" exact element={<Product />} />
            <Route path="/singlebill" exact element={<SingleBill />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
