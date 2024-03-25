import { createHashRouter, RouterProvider } from "react-router-dom";
import { RootPage } from "./routes/RootPage.tsx";
import { SchoolboyPage } from "./routes/SchoolboyPage.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Alert, Container, Snackbar } from "@mui/material";
import { NavBar } from "./components/nagivation/NavBar.tsx";
import { NavDrawer } from "./components/nagivation/NavDrawer.tsx";
import { useState } from "react";
import { AppContext, AppContextType } from "./context/app-context.ts";

const router = createHashRouter(
  [
    {
      path: "/",
      element: <RootPage />,
    },
    {
      path: "/table/:classKey/:id",
      element: <SchoolboyPage />,
    },
  ],
  // {
  //   basename: "https://velm14.github.io/schoolboy/",
  // },
);

function App() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<AppContextType["error"]>("");

  return (
    <AppContext.Provider
      value={{
        error,
        setError,
        isSnackbarOpen: open,
        setIsSnackbarOpen: setOpen,
      }}
    >
      <div>
        <NavBar />
        <NavDrawer />
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => {
            setOpen(false);
          }}
        >
          <Alert
            onClose={() => {
              setOpen(false);
            }}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            {error}
          </Alert>
        </Snackbar>
        <Container sx={{ paddingBottom: 10 }}>
          <RouterProvider router={router} />
          <ReactQueryDevtools position="bottom" />
        </Container>
      </div>
    </AppContext.Provider>
  );
}

export default App;
