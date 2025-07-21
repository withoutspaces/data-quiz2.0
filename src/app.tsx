import { Router } from "./routes/router";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
