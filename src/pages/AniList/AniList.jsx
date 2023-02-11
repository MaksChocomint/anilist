import { useContext, useEffect, useRef, useState } from "react";
import AniListService from "../../API/AniListService";
import styles from "./AniList.module.scss";
import Card from "../../components/UI/Card/Card";
import { useObserver } from "../../hooks/useObserver";
import Loader from "../../components/UI/Loader/Loader";
import { AniContext } from "../../context/AniContext";
import { useAniListTitle } from "../../hooks/useAniListTitle";

const AniList = ({ isLocationChanged, setIsLocationChanged }) => {
  const [totalPages, setTotalPages] = useState(0);
  const update = useRef(true);

  const infinitePaginationElement = useRef();
  const {
    filter,
    animeList,
    setAnimeList,
    page,
    setPage,
    isLoading,
    setIsLoading,
    refresh,
    setRefresh,
  } = useContext(AniContext);

  const getTopAnime = async () => {
    if (!isLocationChanged) {
      setIsLoading(true);
      const response = await AniListService.getTopAnime(page, filter);
      setAnimeList([...animeList, ...response.data.data]);
      setTotalPages(response.data.pagination.last_visible_page);
      setIsLoading(false);
    } else {
      setIsLoading(true);
      const response = await AniListService.getTopAnime(page, filter);
      setAnimeList(response.data.data);
      setTotalPages(response.data.pagination.last_visible_page);
      setIsLoading(false);
      setIsLocationChanged(false);
    }
  };

  useEffect(() => {
    if (update.current) {
      update.current = false;
      return;
    }
    getTopAnime();
  }, [page, refresh]);

  useObserver(infinitePaginationElement, page < totalPages, isLoading, () => {
    setPage(page + 1);
  });

  let aniListTitle = useAniListTitle(filter);

  return (
    <div className={styles.anilist}>
      <h1 className={styles.anilist_title}>{aniListTitle}</h1>
      <div className={styles.anilist_content}>
        {animeList.map((anime) => (
          <Card anime={anime} key={anime.mal_id} />
        ))}

        <div className={styles.inf_el} ref={infinitePaginationElement}></div>
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default AniList;
