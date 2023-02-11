import axios from "axios";

export default class AniListService {
  static async getTopAnime(page, filter) {
    const response = await axios.get("https://api.jikan.moe/v4/top/anime", {
      params: { page: page, filter: filter },
    });
    return response;
  }
  static async getAiringAnime(page) {
    const response = await axios.get("https://api.jikan.moe/v4/top/anime", {
      params: { page: page, filter: "airing" },
    });
    return response;
  }

  static async getUpcomingAnime(page) {
    const response = await axios.get(
      "https://api.jikan.moe/v4/seasons/2023/spring",
      {
        params: { page: page },
      }
    );
    return response;
  }

  static async getUpcomingAnime(page) {
    const response = await axios.get(
      "https://api.jikan.moe/v4/seasons/2023/spring",
      {
        params: { page: page },
      }
    );
    return response;
  }

  static async getTopCharacters(page) {
    const response = await axios.get(
      "https://api.jikan.moe/v4/top/characters",
      {
        params: { page: page },
      }
    );
    return response;
  }
}
