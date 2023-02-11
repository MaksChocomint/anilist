import { Route, Routes, Navigate } from "react-router-dom";
import AniList from "../pages/AniList/AniList";
import AiringList from "../pages/AiringList/AiringList";
import UpcomingList from "../pages/UpcomingSeason/UpcomingList";
import { useLocation } from "react-router-dom";
import { useContext, useLayoutEffect, useRef, useState } from "react";
import { AniContext } from "../context/AniContext";
import CharacterList from "../pages/CharacterList/CharacterList";

const AppRouter = () => {
  const location = useLocation();
  const [isLocationChanged, setIsLocationChanged] = useState(false);
  const firstUpdate = useRef(true);
  const { setRefresh, page, setPage } = useContext(AniContext);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    if (firstUpdate.current) {
      firstUpdate.current = false;
      if (page !== 1) {
        setPage(1);
      } else {
        setRefresh((refresh) => !refresh);
      }
    }
    firstUpdate.current = true;
    setIsLocationChanged(true);
  }, [location.pathname]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <AniList
            isLocationChanged={isLocationChanged}
            setIsLocationChanged={setIsLocationChanged}
          />
        }
      />
      <Route
        path="/airing"
        element={
          <AiringList
            isLocationChanged={isLocationChanged}
            setIsLocationChanged={setIsLocationChanged}
          />
        }
      />
      <Route
        path="/upcoming"
        element={
          <UpcomingList
            isLocationChanged={isLocationChanged}
            setIsLocationChanged={setIsLocationChanged}
          />
        }
      />

      <Route
        path="/characters"
        element={
          <CharacterList
            isLocationChanged={isLocationChanged}
            setIsLocationChanged={setIsLocationChanged}
            location={location.pathname ? location.pathname.substring(1) : ""}
          />
        }
      />
      <Route path={"*"} element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
