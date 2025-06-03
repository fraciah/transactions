import { useNavigate, useParams } from "react-router-dom";

import RQTransaction from "../../../RQ/RQTransaction";
import Loading from "../../components/Loading";

const TransactionsView = () =>{
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: transaction, isLoading } = RQTransaction(id);

  const formatDate = (iso) =>
    new Date(iso).toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
  });
  if (isLoading) return <Loading isLoading={true} />;
  
  return(
    <div>
      <button onClick={() => navigate('/transactions')}>Back</button>
      <div className="transaction-view">
        <div className="card">
          <h2>Transaction Details</h2>

          <div className="card-section">
            <h3>Metadata</h3>
            <p><strong>Transaction Time:</strong> {formatDate(transaction.transactionTime)}</p>
            <p><strong>User ID:</strong> {transaction.userId}</p>
          </div>

          <div className="card-section">
            <h3>Transaction Info</h3>
            <p><strong>Reference:</strong> {transaction.transactionRef}</p>
            <p>
              <strong>Status:</strong>{" "}
              <span className={`status ${transaction.status}`}>{transaction.status}</span>
            </p>
            <p><strong>Narration:</strong> {transaction.narration}</p>
          </div>

          <div className="card-section">
            <h3>Account Info</h3>
            <p><strong>Account Number:</strong> {transaction.accountNumber}</p>
            <p><strong>Amount:</strong> {transaction.amount }</p>
          </div>

        </div>
      </div>
    </div>
  )
}
export default TransactionsView;