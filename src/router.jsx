import Error from "./assets/views/error.jsx";
import App from "./App.jsx";
import Login from "./assets/login/login.jsx";
import StoredPasswords from "./assets/storedPasswords/storedPasswords.jsx";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/storedPasswords",
    element: <StoredPasswords />,
    errorElement: <Error />,
  }
]);

export default router;
