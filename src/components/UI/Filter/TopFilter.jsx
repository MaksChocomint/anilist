import { useContext } from "react";
import { AniContext } from "../../../context/AniContext";
import styles from "./TopFilter.module.scss";
import { Link } from "react-router-dom";

const TopFilter = ({ setIsShowTopList, setFilter }) => {
  const { setAnimeList, page, setPage, setRefresh } = useContext(AniContext);

  return (
    <div
      className={styles.top_filter}
      onMouseOver={() => {
        setIsShowTopList(true);
      }}
      onMouseOut={() => {
        setIsShowTopList(false);
      }}
    >
      <ul className={styles.top_filter_list}>
        <li
          className={styles.top_filter_list_item}
          onClick={() => {
            setFilter("");
            setAnimeList([]);

            if (page !== 1) {
              setPage(1);
            } else {
              setRefresh((refresh) => !refresh);
            }
          }}
        >
          <Link to="/">Rating</Link>
        </li>
        <li
          className={styles.top_filter_list_item}
          onClick={() => {
            setFilter("bypopularity");
            setAnimeList([]);

            if (page !== 1) {
              setPage(1);
            } else {
              setRefresh((refresh) => !refresh);
            }
          }}
        >
          <Link to="/">Popularity</Link>
        </li>
        <li
          className={styles.top_filter_list_item}
          onClick={() => {
            setFilter("favorite");
            setAnimeList([]);

            if (page !== 1) {
              setPage(1);
            } else {
              setRefresh((refresh) => !refresh);
            }
          }}
        >
          <Link to="/">Favorite</Link>
        </li>
      </ul>
    </div>
  );
};

export default TopFilter;
