import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const pathValue = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathValue]);

  return children;
};

export default ScrollToTop;
