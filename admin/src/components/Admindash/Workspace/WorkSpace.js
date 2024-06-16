import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "../Product/Product";

const WorkSpace = () => {
  return (
    <>
      <Routes>
        <Route path="/project" element={<Product />} />
      </Routes>
    </>
  );
};

export default WorkSpace;
