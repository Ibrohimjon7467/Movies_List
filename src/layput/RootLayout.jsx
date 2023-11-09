import { Outlet } from "react-router-dom";
import Additions from "../components/Additions";
import TrendingMovies from "../components/TrendingMovies";
import SrcInput from './../components/SrcInput';

function RootLayout() {
  return (
    <div className="wrapper w-full h-full flex p-5 gap-8 text-white">
      <Additions/>
      <div className="main-sec w-full">
        <SrcInput/>
        <TrendingMovies/>
            <main>
              <Outlet/>
            </main>
      </div>
    </div>
  )
}

export default RootLayout