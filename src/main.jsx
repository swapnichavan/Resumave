import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {store} from "./store/store";

import {createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import Editor from "./Components/Editor/Editor.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <App />
    ),
  },
  {
    path: "/editor/:tab",
    element:<Editor/>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
