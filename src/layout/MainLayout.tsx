import { Suspense, useEffect, type ReactElement } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LoadingPage from "../components/LoadingPage";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorFallback";


function MainLayout(): ReactElement {
useEffect(() => {
  const timer = setTimeout(() => {
    document.documentElement.classList.remove("preload");
    document.documentElement.classList.add("loaded");
  }, 500);

  return () => clearTimeout(timer);
}, []);

  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="main">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<LoadingPage />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
