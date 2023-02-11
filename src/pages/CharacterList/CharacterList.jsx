import { useContext, useEffect, useRef, useState } from "react";
import AniListService from "../../API/AniListService";
import styles from "./CharacterList.module.scss";
import Card from "../../components/UI/Card/Card";
import { useObserver } from "../../hooks/useObserver";
import Loader from "../../components/UI/Loader/Loader";
import { AniContext } from "../../context/AniContext";

const CharacterList = ({
  isLocationChanged,
  setIsLocationChanged,
  location,
}) => {
  const [totalPages, setTotalPages] = useState(0);
  const update = useRef(true);

  const infinitePaginationElement = useRef();
  const {
    characterList,
    setCharacterList,
    page,
    setPage,
    isLoading,
    setIsLoading,
    refresh,
  } = useContext(AniContext);

  const getTopCharacters = async () => {
    if (!isLocationChanged) {
      setIsLoading(true);
      const response = await AniListService.getTopCharacters(page);
      setCharacterList([...characterList, ...response.data.data]);
      setTotalPages(response.data.pagination.last_visible_page);
      setIsLoading(false);
    } else {
      setIsLoading(true);
      const response = await AniListService.getTopCharacters(page);
      setCharacterList(response.data.data);
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
    getTopCharacters();
  }, [page, refresh]);

  useObserver(infinitePaginationElement, page < totalPages, isLoading, () => {
    setPage(page + 1);
  });

  const aniListTitle = "Top Characters";

  return (
    <div className={styles.anilist}>
      <h1 className={styles.anilist_title}>{aniListTitle}</h1>
      <div className={styles.anilist_content}>
        {characterList.map((anime) => (
          <Card anime={anime} location={location} key={anime.mal_id} />
        ))}

        <div className={styles.inf_el} ref={infinitePaginationElement}></div>
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default CharacterList;
