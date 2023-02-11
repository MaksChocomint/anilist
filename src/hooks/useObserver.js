import { useRef, useEffect } from "react";

export const useObserver = (ref, canLoad, isLoading, callback) => {
  const observer = useRef();
  if (observer.current) observer.current.disconnect();
  useEffect(() => {
    if (isLoading) return;

    const cb = (entries) => {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);
  }, [isLoading]);
};
