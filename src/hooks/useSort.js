import { useMemo } from "react";

export const useSort = (items, sort) => {
  const sortedItems = useMemo(() => {
    if (sort) {
      return [...items].sort((a, b) => {
        if (a[sort] === null || b[sort] === null) return 0;
        if (typeof a[sort] === "number") return a[sort] - b[sort];
        else return a[sort].localeCompare(b[sort]);
      });
    }
    return items;
  }, [sort, items]);
  return sortedItems;
};
