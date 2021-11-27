import { useEffect } from "react";

const useEscape = (callback) => {
  useEffect(() => {
    const escFn = (e) => {
      if (e.keyCode === 27) {
        callback();
      }
    };
    window.addEventListener("keydown", escFn);

    return () => {
      window.removeEventListener("keydown", escFn);
    };
  }, [callback]);
};

export default useEscape;
