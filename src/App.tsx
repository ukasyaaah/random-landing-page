import { useEffect, useState } from "react";
import Header from "./components/Header";
import axios from "axios";
import type Data from "./types/data";

export default function App() {
  const [data, setData] = useState<Data>();

  const getData = async () => {
    console.log("remi");
    const response = await axios.get("./resumeData.json");
    return setData(response.data.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-full">
      <Header data={data!}></Header>
    </div>
  );
}
