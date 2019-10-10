import React from "react";
import { Link, Router } from "@reach/router";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";

import Breadcrumb from "./Breadcrumb";

const items = [
  { to: "/", label: "Home" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/contact", label: "Contact" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" }
];

const App = () => (
  <div className="app">
    <Breadcrumb>
      {items.map(({ to, label }) => (
        <Link key={to} to={to}>
          {label}
        </Link>
      ))}
    </Breadcrumb>
    <Router>
      <Home path="/" />
      <Dashboard path="/dashboard" />
      <Contact path="/contact" />
      <About path="/about" />
      <Blog path="/blog" />
    </Router>
  </div>
);

export default App;
