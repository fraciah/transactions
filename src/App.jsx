import React from "react";
import { Route, Routes } from "react-router-dom";

import { routes } from "./utils/routes";
import RequireAuth from "./hooks/RequireAuth";
import NavBar from "./web/components/NavBar";

function App() {
  return (
    <Routes>
      {routes.map((route, routeIdx) => (
        <Route key={routeIdx} path={route.path}
          element={
            route.auth ? (
              <RequireAuth>
                <NavBar/>
                <route.element />
              </RequireAuth>
            ) : (
              <route.element />
            )
          }
        />
      ))}
    </Routes>
  );
}

export default App;
