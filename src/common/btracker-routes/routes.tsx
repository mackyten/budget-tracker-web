import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../features/home-page";
import AboutPage from "../../features/info-page";
import App from "../../App";
import CreateIncomeForm from "../../features/create-expense";
import { IncomeList } from "../../features/home-page/sub-modules/income-list";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
        children: [
          {
            path: "/home/create",
            element: <CreateIncomeForm />,
          },
          {
            path: "/home/income-list",
            element: <IncomeList />,
          },
        ],
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);
