import Carousel from "@/components/banner/carousel";
import CategoryMenu from "@/components/banner/menu";
import Flashsale from "@/components/home/flashSale";
import QuickShop from "@/components/home/quickShop";

const banners = [
  { image: "/assets/banner1.png", title: "Banner 1" },
  { image: "/assets/banner2.jpg", title: "Banner 2" },
  { image: "/assets/banner3.jpg", title: "Banner 3" },
];
export type TBanners = typeof banners;
const HomePage = () => {
  return (
    <main className="h-[5000px]">
      <div className="relative h-[305px] w-full overflow-hidden">
        <Carousel banners={banners} />
        <CategoryMenu />
      </div>
      <QuickShop />
      <Flashsale />
    </main>
  );
};

export default HomePage;
