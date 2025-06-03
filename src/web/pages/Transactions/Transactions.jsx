import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../../context/AuthProvider";
import RQTransactions from "../../../RQ/RQTransactions";
import TableComponent from "../../components/TableComponent";

const Transactions = () =>{
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { data: transactions } = RQTransactions(user.email);

  const transactionClicked = (row) => navigate(`/transactions/view/${row.id}`);

  return(
    <div>
      <TableComponent
        data={transactions}
        columns={columns}
        onRowClicked={transactionClicked}
      />
    </div>
  )
}
export default Transactions;

const columns = [
  {
    name:"transactionTime",
    selector: (row) => row.transactionTime,
  },
  {
    name:"Account No",
    selector: (row) => row.accountNumber
  },
  {
    name:"Amount",
    selector: (row) => row.amount
  },
  {
    name:"Status",
    selector: (row) => row.status
  }
]