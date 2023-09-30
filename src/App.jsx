import { Hero, Sales } from "./components";
import { heroapi, popularsales, toprateslaes } from "./data/data.js";

function App() {
  return (
    <main className=" flex flex-col gap-16 relative">
      <Hero heroapi={heroapi} />
      <Sales endpoint={popularsales} ifExists />
      <Sales endpoint={toprateslaes} />
    </main>
  );
}

export default App;
