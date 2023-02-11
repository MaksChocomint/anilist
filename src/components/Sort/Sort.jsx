import { useContext } from "react";
import { AniContext } from "../../context/AniContext";
import { useSort } from "../../hooks/useSort";
import styles from "./Sort.module.scss";

const Sort = () => {
  const { sort, setSort, setAnimeList, animeList } = useContext(AniContext);
  setAnimeList(useSort(animeList, sort));
  return (
    <select
      defaultValue="Select sort"
      onChange={(e) => {
        setSort(e.target.value);
      }}
      className={styles.sort_select}
    >
      <option value="title" className={styles.sort_option}>
        by Title
      </option>
      <option value="score" className={styles.sort_option}>
        by Score
      </option>
    </select>
  );
};

export default Sort;
