import { createContext } from "react";
import type Data from "../types/data";

export const DataContext = createContext<Data | null>(null);
