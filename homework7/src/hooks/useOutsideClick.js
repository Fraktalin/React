import { useEffect } from "react";

const useOutsideClick = (callback, obj) => {
  useEffect(() => {
    const fn = (e) => {
      if (obj.current.contains(e.target)) {
        e.stopPropagation();
      } else {
        callback();
      }
    };

    window.addEventListener("click", fn);

    return () => {
      window.removeEventListener("click", fn);
    };
  }, [callback, obj]);
};

export default useOutsideClick;
