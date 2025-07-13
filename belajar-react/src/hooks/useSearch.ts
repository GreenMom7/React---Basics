import { useSearchParams } from "react-router";

export const useSearch = () => {
  const [searchParams, setSearchParamps] = useSearchParams();

  const handleSortValueChange = (sortValue: string) => {
    searchParams.set("sort", sortValue);

    setSearchParamps(searchParams);
  };
  return {
    searchParams,
    handleSortValueChange,
  };
};
