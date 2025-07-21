import { Router } from "./routes/router";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <Router />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
