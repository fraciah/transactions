import { useContext } from "react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { TRANSACTIONS } from "../utils/apis";
import AuthContext from "../context/AuthProvider";

const RQTransaction = (id) => {
  const { token} = useContext(AuthContext);

  const fetchTransaction = async () => {
    const url = `${TRANSACTIONS}/${id}`;
    const response = await axios.get(url,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response?.data;
  }

  return useQuery({
    queryKey: ["transaction"],
    queryFn: fetchTransaction,
    enabled: !!id,
    staleTime: 1000 * 60 * 10,
  })
};

export default RQTransaction;
