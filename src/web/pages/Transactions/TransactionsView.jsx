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
    <div className="transaction-container">
      <button onClick={() => navigate('/transactions')}>Back</button>

      <div className="title-card">
        <span className="page-title">Transaction Details</span>
      </div>

      <div className="card-grid">
        <div className="page-card">
          <div className="transaction-details">
            <span className="title">Metadata</span>
            <div className="row">
              <span className="label">Time:</span>
              <span className="value">{formatDate(transaction.transactionTime)}</span>
            </div>
            <div className="row">
              <span className="label">User ID:</span>
              <span className="value">{transaction.userId}</span>
            </div>
          </div>
        </div>
      

        <div className="page-card">
          <div className="transaction-details">
            <span className="title">Transaction Info</span>
            <div className="row">
              <span className="label">Reference:</span>
              <span className="value">{transaction.transactionRef}</span>
            </div>
            <div className="row">
              <span className="label">Status:</span>
              <span className="value">{transaction.status}</span>
            </div>
            <div className="row">
              <span className="label">Narration:</span>
              <span className="value">{transaction.narration}</span>
            </div>
          </div>
        </div>

        <div className="page-card">
          <div className="transaction-details">
            <span className="title">Account Info</span>
            <div className="row">
              <span className="label">Account No:</span>
              <span className="value">{transaction.accountNumber}</span>
            </div>
            <div className="row">
              <span className="label">Amount:</span>
              <span className="value">{transaction.amount }</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TransactionsView;