import { useNavigate, useParams } from "react-router-dom";

import RQTransaction from "../../../RQ/RQTransaction";

const TransactionsView = () =>{
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: transaction } = RQTransaction(id);

  console.log(transaction)
  
  return(
    <div>
      <button onClick={() => navigate('/transactions')}>Back</button>
    </div>
  )
}
export default TransactionsView;