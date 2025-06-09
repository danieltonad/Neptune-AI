import "./App.scss";
import Header from "./components/header";
import { useSearch } from "./context/SearchContext";
import { Home } from "./pages/home";
import { Results } from "./pages/results";
import config from "./utils/config";

function App() {
  const { messages, isSearching } = useSearch();

  return (
    <>
      <Header title={config.name} />
      <div className="container">
        {messages.length > 0 || isSearching ? <Results /> : <Home />}
      </div>
    </>
  );
}

export default App;
