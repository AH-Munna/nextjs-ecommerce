import Carousel from "@/components/banner/desktop/carousel";
import CategoryMenu from "@/components/banner/desktop/menu";
import MobileBanner from "@/components/banner/mobile/hero";
import Flashsale from "@/components/home/flashSale";
import FlashSaleMobile from "@/components/home/flashSaleMobile";
import QuickShop from "@/components/home/quickShop";
import QuickshopMobile from "@/components/home/quickshopMobile";
import SaleNav from "@/components/home/saleNav";

const banners = [
  {
    image: "/assets/banners/banner1.png",
    imgSmall: "/assets/banners/m1.jpg",
    title: "Banner 1",
  },
  {
    image: "/assets/banners/banner2.jpg",
    imgSmall: "/assets/banners/m1.jpg",
    title: "Banner 2",
  },
  {
    image: "/assets/banners/banner3.jpg",
    imgSmall: "/assets/banners/m1.jpg",
    title: "Banner 3",
  },
];
export type TBanners = typeof banners;
const HomePage = () => {
  return (
    <main className="pb-10">
      <div className="hidden md:block">
        <Desktop />
      </div>
      <div className="md:hidden bg-secondary">
        <Mobile />
      </div>
    </main>
  );
};

export default HomePage;

const Desktop = () => {
  return (
    <>
      <div className="relative h-[305px] w-full overflow-hidden">
        <Carousel banners={banners} />
        <CategoryMenu />
      </div>
      <QuickShop />
      <Flashsale />
    </>
  );
};

const Mobile = () => {
  return (
    <>
      <MobileBanner banners={banners} />
      <QuickshopMobile />
      <SaleNav />
      <FlashSaleMobile />
    </>
  );
};
