import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme.ts";
import { QueryClientContext } from "@tanstack/react-query";
import { AppQueryClient } from "./services/query-client.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientContext.Provider value={AppQueryClient.get()}>
      <ThemeProvider theme={theme}>
        <App />
        <CssBaseline />
      </ThemeProvider>
    </QueryClientContext.Provider>
  </React.StrictMode>,
);
