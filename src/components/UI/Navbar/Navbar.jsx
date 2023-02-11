import styles from "./Navbar.module.scss";
import navbarLogoImg from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { BsMoonStarsFill } from "react-icons/bs/";
import { useState } from "react";
import TopFilter from "../Filter/TopFilter";

const Navbar = ({ setFilter }) => {
  const [isShowTopList, setIsShowTopList] = useState(false);

  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.navbar_logo}>
        {
          <img
            src={navbarLogoImg}
            alt="logo"
            className={styles.navbar_logo_img}
          />
        }
        <h1 className={styles.navbar_logo_title}>AniList</h1>
        <BsMoonStarsFill className={styles.navbar_logo_icon} />
      </Link>
      <div className={styles.navbar_links}>
        <div style={{ position: "relative" }}>
          <Link
            className={
              styles.navbar_link +
              ` ` +
              (isShowTopList && styles.navbar_link_hover)
            }
            to="/"
            onMouseOver={() => {
              setIsShowTopList(true);
            }}
            onMouseOut={() => {
              setIsShowTopList(false);
            }}
            onClick={() => {
              setFilter("");
            }}
          >
            Top
          </Link>
          {isShowTopList && (
            <TopFilter
              setFilter={setFilter}
              setIsShowTopList={setIsShowTopList}
            />
          )}
        </div>

        <Link className={styles.navbar_link} to="/airing">
          Airing now
        </Link>
        <Link className={styles.navbar_link} to="/upcoming">
          Next season
        </Link>
        <Link className={styles.navbar_link} to="/characters">
          Characters
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
