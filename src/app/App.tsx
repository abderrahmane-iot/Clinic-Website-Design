import { RouterProvider } from "react-router";
import { router } from "./routes";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <SpeedInsights />
    </>
  );
}
