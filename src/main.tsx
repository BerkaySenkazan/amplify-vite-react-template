import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./ErrorScreen.tsx"
import "./DoRead.tsx"
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import {RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./ErrorScreen.tsx";
import DoRead from "./DoRead.tsx";
import { Authenticator } from "@aws-amplify/ui-react";


Amplify.configure(outputs);

const router = createBrowserRouter([{

    path: "",
    element: <App />,
    errorElement: <ErrorPage />
    


}, {
    path: "/doread",
    element: <DoRead />
    
}])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator.Provider>
      <RouterProvider router={router} />
    </Authenticator.Provider>

  </React.StrictMode>
);


