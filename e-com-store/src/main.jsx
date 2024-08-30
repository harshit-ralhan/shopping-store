import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import DisplayPicture from "./components/DisplayPicture.jsx";
import { createBrowserRouter } from "react-router-dom";
import ShoppingStore from "./routes/ShoppingStore.jsx";
import Bag from "./routes/Bag.jsx";
import About from "./routes/About.jsx";
import Login from "./routes/Login.jsx";
import SignUp from "./routes/SignUp.jsx";
import nailStore from "./store/index.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <DisplayPicture /> },
      { path: "/buy", element: <ShoppingStore /> },
      { path: "/bag", element: <Bag /> },
      { path: "/about", element: <About /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={nailStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
