import { useState } from "react";

export function useFilter(data, callback) {
  const [query, setQuery] = useState("");
  const filteredData = data.filter((el) =>
    callback(el).toLowerCase().includes(query)
  );
  return [filteredData, setQuery];
}
