
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GsapTransition from "./components/GsapTransition";

export default function App() {
  return (
    <>

    <div className="min-h-screen bg-[#171616] font-['Monument'] text-gray-400">  
      <BrowserRouter>
      <Navbar/>
      <GsapTransition/>
        <Footer/>
      </BrowserRouter>
    </div>
   </>
  );
}
