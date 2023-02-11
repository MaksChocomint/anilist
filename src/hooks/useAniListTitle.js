import { useMemo } from "react";
export const useAniListTitle = (filter) => {
  let newAniListTitle = useMemo(() => {
    if (filter === "bypopularity") {
      return "Anime By Popularity";
    } else if (filter === "favorite") {
      return "Anime By Favorite Votes";
    } else {
      return "Top Anime";
    }
  }, [filter]);
  return newAniListTitle;
};
