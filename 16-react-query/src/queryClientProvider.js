import { QueryClient } from "react-query";

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 5 * 1000 // 5 sec
    }
  }
})