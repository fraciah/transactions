import { useNavigate } from "react-router-dom";

import RQTransactions from "../../../RQ/RQTransactions";
import TableComponent from "../../components/TableComponent";
import Loading from "../../components/Loading";

const Transactions = () =>{
  const navigate = useNavigate();

  const { data: transactions, isLoading } = RQTransactions();

  const transactionClicked = (row) => navigate(`/transactions/view/${row.id}`);
  if (isLoading) return <Loading isLoading={true} />;
  
  return(
    <div className="transactions-view">
      <div className="table">
        <TableComponent
          data={transactions}
          columns={columns}
          onRowClicked={transactionClicked}
        />
      </div>
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