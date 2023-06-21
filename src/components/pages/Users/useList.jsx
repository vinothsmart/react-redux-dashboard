import { useCallback, useEffect, useMemo, useState } from "react";
import { deleteListItem, getList } from "./Utility";

export function useList() {
  const [list, setList] = useState([]);

  const handleDeleteItem = useCallback((id) => {
    return () => {
      deleteListItem(() => {
        setList((prev) => prev.filter((x) => x.id !== id));
      });
    };
  }, []);

  useEffect(() => {
    getList(setList);
  }, []);

  return useMemo(
    () => ({
      list,
      handleDeleteItem,
    }),
    [handleDeleteItem, list]
  );
}
