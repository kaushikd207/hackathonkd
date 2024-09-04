import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./components/AddEditDataForm";
import HeroPage from "./components/HeroPage";
import CardDetailsPage from "./components/CardDetailsPage";
import { Provider } from "react-redux";
import { store } from "./store";
import AddDataForm from "./components/AddEditDataForm";
import AddEditDataForm from "./components/AddEditDataForm";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HeroPage />,
      },
      {
        path: "/admin",
        element: <AddEditDataForm />,
      },
      {
        path: "/cardDetails",
        element: <CardDetailsPage />,
      },
    ],
  },
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
