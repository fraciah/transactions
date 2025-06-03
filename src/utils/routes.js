import Login from "../web/pages/Login/Login";
import Transactions from "../web/pages/Transactions/Transactions";
import TransactionsView from "../web/pages/Transactions/TransactionsView";

export const routes = [
    {
      path: '',
      element: Login,
      auth: false
    },
    {
      path: '/transactions',
      element: Transactions,
      auth: true
    },
    {
      path: '/transactions/view/:id',
      element: TransactionsView,
      auth: true
    }
  ]