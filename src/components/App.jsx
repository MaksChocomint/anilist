import "../style/App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import Navbar from "./UI/Navbar/Navbar";
import { useState } from "react";

import { AniContext } from "../context/AniContext";
import Sort from "./Sort/Sort";

const App = () => {
  const [filter, setFilter] = useState("");
  const [animeList, setAnimeList] = useState([]);
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [sort, setSort] = useState("");

  return (
    <AniContext.Provider
      value={{
        filter,
        animeList,
        setAnimeList,
        page,
        setPage,
        isLoading,
        setIsLoading,
        refresh,
        setRefresh,
        characterList,
        setCharacterList,
        sort,
        setSort,
      }}
    >
      <BrowserRouter>
        <Navbar setFilter={setFilter} />
        {/* <Sort /> */}
        <AppRouter />
      </BrowserRouter>
    </AniContext.Provider>
  );
};

export default App;
