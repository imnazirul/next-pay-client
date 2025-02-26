import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

// Enhanced useFetch hook to handle all query parameters
export const useFetch = (queryKey, queryFn, options) => {
    const [params, setParams] = useState({
      page: 1,
      limit: 10,
      search: '',
    });
  
    // Wrap the queryFn to include all params
    const wrappedQueryFn = async () => {
      return queryFn(params);
    };
  
    const query = useQuery({
      queryKey: [...queryKey, params],
      queryFn: wrappedQueryFn,
      ...options,
    });
  
    // Function to update specific params
    const setQueryParams = (newParams) => {
      setParams(prev => ({ ...prev, ...newParams }));
    };
  
    return { ...query, setQueryParams, params };
  };
  