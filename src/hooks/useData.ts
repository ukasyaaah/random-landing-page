import { useEffect, useState } from "react";
import type Data from "../types/data";
import axios from "axios";

export default function useData() {
  const [data, setData] = useState<Data>();

  const getData = async () => {
    console.log("remi");
    const response = await axios.get("./resumeData.json");
    return setData(response.data.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return data;
}
