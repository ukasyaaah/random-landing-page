import { useEffect, useState } from "react";
import Header from "./components/Header";
import axios from "axios";
import type Data from "./types/data";
import { DataContext } from "./context/DataContext";
import About from "./components/About";

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
      <DataContext.Provider value={data!}>
        <Header />
        <About />
      </DataContext.Provider>
    </div>
  );
}
