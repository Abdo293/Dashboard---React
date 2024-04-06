import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Team } from "./pages/team/Team";
import { Contacts } from "./pages/contacts/Contacts";
import { Invoices } from "./pages/invoices/Invoices";
import { Form } from "./pages/form/Form";
import { Calender } from "./pages/calender/Calender";
import { Faq } from "./pages/faq/Faq";
import { Bar } from "./pages/bar/Bar";
import { Pie } from "./pages/pie/Pie";
import { Line } from "./pages/line/Line";
// @ts-ignore
import { Geography } from "./pages/geography/Geography";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calender" element={<Calender />} />
      <Route path="faq" element={<Faq />} />
      <Route path="bar" element={<Bar />} />
      <Route path="pie" element={<Pie />} />
      <Route path="line" element={<Line />} />
      <Route path="geography" element={<Geography />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
