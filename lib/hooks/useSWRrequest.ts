import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

export const useSWRrequest = (endpoint: string) => {
  const { data, error } = useSWR(baseURL + endpoint, fetcher);

  return {
    data,
    error,
  };
};
