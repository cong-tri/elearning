import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Signin from "./pages/signin/signin";
import Dashboard from "./pages/dashboard/dashboard";
import PracticePage from "./pages/practice/practice";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="account" element={<Signin />} />
            <Route path="practice" element={<PracticePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
