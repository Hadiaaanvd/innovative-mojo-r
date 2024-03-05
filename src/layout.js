import React from "react";
import { Route, Routes, Navigate } from "react-router";
import { finalRoutes } from "./routes";

const Layout = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="layout-component">
      <React.Suspense fallback="">
        <Routes>
          {finalRoutes.map(({ component: Component, ...rest }, idx) => {
            return (
              Component && (
                <Route
                  key={idx}
                  path={rest.path}
                  exact={rest.exact}
                  element={Component}
                />
              )
            );
          })}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </React.Suspense>
    </div>
  );
};

export default Layout;
