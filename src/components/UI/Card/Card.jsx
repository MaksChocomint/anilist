import styles from "./Card.module.scss";
import { useState } from "react";
import AnimeCardDetails from "../CardDetails/Anime/AnimeCardDetails";
import CharacterCardDetails from "../CardDetails/Character/CharacterCardDetails";

const Card = ({ anime, location }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className={
        showDetails
          ? `${styles.anilist_card_hover} ${styles.anilist_card}`
          : `${styles.anilist_card_unhover} ${styles.anilist_card}`
      }
    >
      <img
        src={anime.images.webp.image_url}
        alt="anime"
        className={styles.anilist_card_img}
        onMouseOver={() => {
          setShowDetails(true);
        }}
        onMouseOut={() => {
          setShowDetails(false);
        }}
      />
      {showDetails && location !== "characters" && (
        <AnimeCardDetails anime={anime} />
      )}
      {showDetails && location === "characters" && (
        <CharacterCardDetails anime={anime} />
      )}
      {!showDetails && location !== "characters" && (
        <div className={styles.anilist_card_info}>
          <div className={styles.anilist_card_info_title}>{anime.title}</div>
          <div className={styles.anilist_card_info_type}>
            {anime.type === "TV" ? `${anime.type} Series` : anime.type}
          </div>

          <div className={styles.anilist_card_info_year}>{anime.year}</div>
        </div>
      )}
      {!showDetails && location === "characters" && (
        <div className={styles.anilist_card_info}>
          <div className={styles.anilist_card_info_title}>{anime.name}</div>
        </div>
      )}
    </div>
  );
};

export default Card;
