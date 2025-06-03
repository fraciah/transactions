import { useContext } from "react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { TRANSACTIONS } from "../utils/apis";
import AuthContext from "../context/AuthProvider";

const RQTransactions = (email) => {
  const { token} = useContext(AuthContext);

  const fetchTransactions = async () => {
    const url = `${TRANSACTIONS}?pageNo=0&pageSize=10&sortBy=id&sortDirection=desc`;
    const response = await axios.get(url,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data?.data?.content;
  }

  return useQuery({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
    enabled: !!email,
    staleTime: 1000 * 60 * 10,
  })
};

export default RQTransactions;
