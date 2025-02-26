import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Dashboard from "../Pages/Dashboard";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SendMoney from "../Pages/User/SendMoney";
import CashOut from "../Pages/User/CashOut";
import Transactions from "../Pages/User/Transactions";
import CashIn from "../Pages/Agent/CashIn";
import RequestMoney from "../Pages/Agent/RequestMoney";
import AllTransaction from "../Pages/Admin/AllTransaction";
import BalanceRequest from "../Pages/Admin/BalanceRequest";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <SignIn />,
      },
      {
        path: "sign_in",
        element: <SignIn />,
      },
      {
        path: "sign_up",
        element: <SignUp />,
      },
      {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
      },
      {
        path: "/send-money",
        element: <PrivateRoute><SendMoney/></PrivateRoute>
      },
      {
        path: "/cash-out",
        element: <PrivateRoute><CashOut/></PrivateRoute>
      },
      {
        path: "/cash-in",
        element: <PrivateRoute><CashIn/></PrivateRoute>
      },
      {
        path: "/request-money",
        element: <PrivateRoute><RequestMoney/></PrivateRoute>
      },
      {
        path: "/transactions",
        element: <PrivateRoute><Transactions/></PrivateRoute>
      },
      {
        path: "/balance-requests",
        element: <PrivateRoute><BalanceRequest/></PrivateRoute>
      },
      {
        path: "/transactions-admin",
        element: <PrivateRoute><AllTransaction/></PrivateRoute>
      }
    ],
  },
]);

export default router;
