"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { PortfolioData } from "@/lib/portfolio-types";

interface PortfolioContextValue {
  data: PortfolioData;
  setData: (data: PortfolioData) => void;
  refresh: () => Promise<void>;
}

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

export function PortfolioProvider({
  initialData,
  children,
}: {
  initialData: PortfolioData;
  children: ReactNode;
}) {
  const [data, setData] = useState<PortfolioData>(initialData);

  const refresh = useCallback(async () => {
    const response = await fetch("/api/portfolio", { cache: "no-store" });
    if (response.ok) {
      setData((await response.json()) as PortfolioData);
    }
  }, []);

  const value = useMemo(
    () => ({ data, setData, refresh }),
    [data, refresh],
  );

  return (
    <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>
  );
}

export function usePortfolio(): PortfolioContextValue {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within PortfolioProvider");
  }
  return context;
}
