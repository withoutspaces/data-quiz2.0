import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Contribute } from '@/pages/contribute';
import { EndGame } from "@/pages/end-game";
import { Game } from "@/pages/game";
import { Home } from "@/pages/home";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Game />} />
        <Route path="/end" element={<EndGame />} />
        {/* <Route path="/contribute" element={<Contribute />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
