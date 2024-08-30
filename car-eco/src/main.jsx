import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ClerkProvider } from '@clerk/clerk-react'

import Home from "./Home";
import Profile from "./profile";
import AddListing from "./add-listing";
import { Toaster } from "@/components/ui/sonner"
import SearchByCategory from "./search/[category]";
 

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/add-listing",
    element: <AddListing />,
  },
  {
    path: "/search/:category",
    element: <SearchByCategory />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
      <Toaster />
    </ClerkProvider>
  </StrictMode>
);
