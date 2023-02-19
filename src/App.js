import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Main from "./Main"
import Quizes from "./Quizes"
import Layout from "./Layout"

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
      	<Route path="/" element={<Layout />}>
	        <Route index element={<Main />} />
	        <Route path="quiz" element={<Quizes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
