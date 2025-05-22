import MoviesList from "./components/cine/MoviesList";
import Headrer from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div>
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
