import { useContext } from "react";
import MoviesList from "../components/cine/MoviesList";
import Headrer from "../components/Header";
import Sidebar from "../components/Sidebar";
import { ThemeContext } from "../context";
export default function Page() {
  const { dark } = useContext(ThemeContext);
  return (
    <div className={`h-full w-full ${dark ? "dark" : ""}`}>
      <Headrer />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MoviesList />
        </div>
      </main>
    </div>
  );
}
