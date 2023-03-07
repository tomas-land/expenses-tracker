import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
// const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const useSWRrequest = () => {
  const { data, error } = useSWR(`https://expenses-tracker-self.vercel.app/api/expenses`, fetcher);

  return {
    data,
    error,
  };
};
