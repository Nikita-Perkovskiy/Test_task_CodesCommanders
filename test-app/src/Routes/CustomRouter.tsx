import React, { useState, useEffect } from "react";
import MainPage from "../pages/MainPage/MainPage.tsx";
import LogInPage from "../pages/LogInPage/LogInPage.tsx";
import MainHeader from "../components/MainHeader/MainHeader.tsx";

const CustomRouter: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  const renderPage = () => {
    switch (currentPath) {
      case "/mainPage":
        return <MainPage />;
      case "/logInPage":
        return <LogInPage />;
      default:
        return <MainPage />;
    }
  };
  return (
    <>
      <MainHeader navigate={navigate} />
      {renderPage()}
    </>
  );
};

export default CustomRouter;
