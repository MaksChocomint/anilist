import styles from "./CharacterCardDetails.module.scss";

const CharacterCardDetails = ({ anime }) => {
  let about = anime.about.split("\n");
  about = about.filter((item) => item !== "");

  return (
    <div className={styles.card_details}>
      <div className={styles.card_details_title}>
        {anime.name.includes("Onizuka") ? "Евгений Катунцов" : anime.name}
      </div>
      {about.map((item, index) => {
        const aboutTitle = item.split(": ")[0];
        const aboutInfo = item.split(": ")[1];
        if (about.length <= 2 && index === 0) {
          return (
            <div className={styles.card_details_info} key={item}>
              No information about this character
            </div>
          );
        }
        if (
          item.length >= 40 ||
          item.includes("Source") ||
          !aboutInfo ||
          !aboutTitle
        ) {
          return;
        }
        return (
          <div className={styles.card_details_info} key={item}>
            <span className={styles.card_details_info_name}>
              {`${aboutTitle}:`}
            </span>
            <p>{aboutInfo}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterCardDetails;
