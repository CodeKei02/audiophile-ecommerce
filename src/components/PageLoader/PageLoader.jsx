import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../css/components/page_loader.css";

export const PageLoader = ({ children }) => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [pathname]);

  return loading ? (
    <div className="page-loader-overlay">
      <div className="page-loader-spinner" />
    </div>
  ) : (
    children
  );
};
