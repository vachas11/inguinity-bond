import Longin from "./pages/Login/Longin";
import Register from "./pages/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import "../src/scss/global.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Leftbar from "./components/Leftbar/Leftbar";
import Rightbar from "./components/Rightbar/Rightbar";
import Profile from "./pages/Profile/Profile";
function App() {
  const isLoggedIn = true;

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div className="layout">
          <Leftbar />
          <Outlet />
          <Rightbar />
        </div>
      </div>
    );
  };
  const ProtectedRout = ({ children }) => {
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRout>
          <Layout />
        </ProtectedRout>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },

    {
      path: "/login",
      element: <Longin />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "*",
      element: <h1>page not found</h1>,
    },
  ]);
  return (
    // <React.StrictMode>
    <RouterProvider router={router} />
    // </React.StrictMode>
  );
}

export default App;
