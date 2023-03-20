import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
// const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const useExpensesSWR = () => {
  const { data, mutate, error, isLoading } = useSWR("/api/expenses", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    // revalidateOnMount: false
  });

  return {
    expenses: data,
    error,
    mutate,
    isLoading,
  };
};
