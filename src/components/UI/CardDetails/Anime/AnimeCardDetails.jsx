import styles from "./AnimeCardDetails.module.scss";

const AnimeCardDetails = ({ anime }) => {
  const scoreColor =
    anime.score >= 9
      ? { color: "rgb(255, 204, 0)" }
      : anime.score >= 8
      ? { color: "rgb(170, 7, 192)" }
      : anime.score >= 7
      ? { color: "rgb(14, 158, 220)" }
      : anime.score >= 6
      ? { color: "rgb(13, 198, 59)" }
      : anime.score >= 5
      ? { color: "rgb(244, 253, 2)" }
      : anime.score >= 4
      ? { color: "rgb(238, 149, 24)" }
      : anime.score >= 3
      ? { color: "rgb(200, 39, 2)" }
      : anime.score >= 2
      ? { color: "rgb(76, 22, 10)" }
      : anime.score >= 1
      ? { color: "rgb(89, 90, 89)" }
      : { color: "rgb(255, 255, 255)" };
  let studios = "";
  anime.studios.forEach((studio, index) => {
    if (index !== anime.studios.length - 1) studios += studio.name + ", ";
    else studios += studio.name;
  });

  let genres = "";
  anime.genres.forEach((genre, index) => {
    if (index !== anime.genres.length - 1) genres += genre.name + ", ";
    else genres += genre.name;
  });
  if (!anime.rating) {
    anime.rating = "???";
  }
  const rating = anime.rating.includes("PG-13")
    ? "PG-13"
    : anime.rating.includes("R - 17")
    ? "R-17"
    : anime.rating.includes("PG")
    ? "PG"
    : anime.rating.includes("R+")
    ? "R+"
    : anime.rating.includes("G")
    ? "G"
    : anime.rating;

  return (
    <div className={styles.card_details}>
      <div className={styles.card_details_title}>{anime.title}</div>
      <div className={styles.card_details_info}>
        <span className={styles.card_details_info_name}>Type:</span>
        <p>{anime.type === "TV" ? "TV Series" : anime.type}</p>
      </div>
      <div className={styles.card_details_info}>
        <span className={styles.card_details_info_name}>Episodes:</span>
        <p>{anime.episodes || "???"}</p>
      </div>
      <div className={styles.card_details_info}>
        <span className={styles.card_details_info_name}>Score:</span>
        <strong style={scoreColor}>{anime.score || "???"}</strong>
      </div>
      <div className={styles.card_details_info}>
        <span className={styles.card_details_info_name}>Season:</span>
        <p style={{ textTransform: "capitalize" }}>{`${anime.season || "???"} ${
          anime.year || ""
        } `}</p>
      </div>

      <div className={styles.card_details_info}>
        <span className={styles.card_details_info_name}>Studios:</span>
        <p>{studios}</p>
      </div>
      <div className={styles.card_details_info}>
        <span className={styles.card_details_info_name}>Source:</span>
        <p>{anime.source}</p>
      </div>
      <div className={styles.card_details_info}>
        <span className={styles.card_details_info_name}>Raing:</span>
        <p>{rating}</p>
      </div>
      <div className={styles.card_details_info}>
        <span className={styles.card_details_info_name}>Genres:</span>
        <p>{genres}</p>
      </div>
    </div>
  );
};

export default AnimeCardDetails;
