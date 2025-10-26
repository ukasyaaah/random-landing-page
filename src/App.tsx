import Header from "./components/Header";
import { DataContext } from "./context/DataContext";
import About from "./components/About";
import useData from "./hooks/useData";

export default function App() {
  const data = useData();

  return (
    <div className="min-h-full font-geist">
      <DataContext.Provider value={data!}>
        <Header />
        <About />
      </DataContext.Provider>
    </div>
  );
}
