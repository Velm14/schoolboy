import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootPage } from "./routes/RootPage.tsx";
import { SchoolboyPage } from "./routes/SchoolboyPage.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Container } from "@mui/material";
import { NavBar } from "./components/nagivation/NavBar.tsx";
import { NavDrawer } from "./components/nagivation/NavDrawer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
  {
    path: "/schoolboy/:classKey/:id",
    element: <SchoolboyPage />,
  },
]);

function App() {
  return (
    <div>
      <NavBar />
      <NavDrawer />
      <Container>
        <RouterProvider router={router} />
        <ReactQueryDevtools position="bottom" />
      </Container>
    </div>
  );
}

export default App;
