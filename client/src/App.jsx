
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GsapTransition from "./components/GsapTransition";
import { store } from "../store/store";
import {Provider} from 'react-redux'

export default function App() {
  return (
    <>
    <div className="min-h-screen bg-[#171616] font-['Monument'] text-gray-400">  
      <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
      <GsapTransition/>
        <Footer/>
      </BrowserRouter>
      </Provider>
    </div>
   </>
  );
}
