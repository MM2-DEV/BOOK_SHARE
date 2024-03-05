import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./components/Layout/MainLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import DashboardLayout from "./components/Layout/DashboardLayout";
import BookList from "./pages/dashboard/books/BookList";
import CreateBook from "./pages/dashboard/books/CreateBook";

const routes1 = createBrowserRouter([
  {
    path: "/signin",
    element: <SignInPage />,
    children: [],
  },

  {
    path: "/signup",
    element: <SignUpPage />,
    children: [],
  },

  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "about",
        element: <AboutPage />,
      },

      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },

      {
        path: "books",
        children: [
          {
            index: true,
            element: <BookList />,
          },
          {
            path: "create",
            element: <CreateBook />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes1} />;
}

export default App;
