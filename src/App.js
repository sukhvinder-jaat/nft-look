import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Hero from "./components/Hero";
import LookOut from "./components/LookOut";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExploreTop from "./components/ExploreTop";
import NftMarket from "./components/NftMarket";
import UpComingNft from "./components/UpComingNft";
function App() {
  return (
    <>
      <MyNav />
      <Hero />
      <LookOut />
      <ExploreTop />
      <NftMarket />
      <UpComingNft />
    </>
  );
}

export default App;
