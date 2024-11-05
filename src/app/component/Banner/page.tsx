import NavBar from "../NavBar/page";
import BannerContent from "../BannerContent/page";

const Banner = () => {
  return (
    <main className="bg-[url('/Bg.jpg')] h-[100vh] bg-cover bg-center text-white relative">
    <NavBar />
    <BannerContent />
  </main>
  );
};

export default Banner;
