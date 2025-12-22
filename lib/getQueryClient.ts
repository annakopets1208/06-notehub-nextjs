import { QueryClient } from "@tanstack/react-query";

let queryClient: QueryClient | undefined;

export default function getQueryClient() {
  if (!queryClient) {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 60 * 1000,
          refetchOnWindowFocus: false,
        },
      },
    });
  }

  return queryClient;
}
