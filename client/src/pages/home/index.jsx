import SearchBox from "../../components/searchBox";
import { useSearch } from "../../context/SearchContext";
import { quickSearch } from "../../utils";
import "./home.scss";

export function Home() {
  return (
    <div className="home">
      <h1>Searching for Artisan?</h1>
      <SearchBox />
      <Suggestions />
    </div>
  );
}

const Suggestions = () => {
  const { sendMessage } = useSearch();
  return (
    <div className="suggestions">
      <div className="suggestions-list">
        {quickSearch.map((item) => (
          <button
            key={item.name}
            className="suggestion"
            onClick={() => sendMessage(item.name)}
          >
            <item.icon size={16} strokeWidth={1.8} />
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};
