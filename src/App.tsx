import Header from "./components/Header";
import { DataContext } from "./context/DataContext";
import About from "./components/About";
import useData from "./hooks/useData";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

export default function App() {
  const data = useData();

  return (
    <div className="min-h-full font-geist ">
      <DataContext.Provider value={data!}>
        <Navbar />
        <Header />
        <About />
        <Contact />
      </DataContext.Provider>
    </div>
  );
}
