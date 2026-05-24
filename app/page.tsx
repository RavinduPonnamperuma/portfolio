import { PortfolioProvider } from "./context/PortfolioContext";
import HomePage from "./components/HomePage";
import { getPortfolioData } from "@/lib/portfolio-store";

export const dynamic = "force-dynamic";

export default function Home() {
  const initialData = getPortfolioData();

  return (
    <PortfolioProvider initialData={initialData}>
      <HomePage />
    </PortfolioProvider>
  );
}
