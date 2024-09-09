import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Signin from "./pages/signin/signin";
import Dashboard from "./pages/dashboard/dashboard";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="account" element={<Signin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
