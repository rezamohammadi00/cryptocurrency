import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StyleProvider } from "@ant-design/cssinjs";

import App from "./App.tsx";
import "./styles/index.css";

// Wait for the DOM to load and remove the loader
const removeLoader = () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0"; // Add a fade-out effect
    setTimeout(() => loader.remove(), 300); // Remove after fade-out
  }
};

// Create a client
const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <StyleProvider layer>
          <App />
        </StyleProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);

removeLoader(); // Remove loader after app mounts
