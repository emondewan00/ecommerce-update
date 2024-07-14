import { auth } from "@/auth";
import Clothing from "@/components/home/Clothing";
import Features from "@/components/home/Features";
import PopularDepartments from "@/components/home/PopularDepartments";
import SideBar from "@/components/home/SideBar";
import Slider from "@/components/home/Slider";
import Sponsors from "@/components/home/Sponsors";
import TopCategories from "@/components/home/TopCategories";
import OfferCardFullWidth from "@/components/shared/OfferCardFullWidth";

export default async function Home() {
  const session = await auth();
  // console.log(session,"user is authenticated");
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-0">
      <div className="my-4 flex flex-col-reverse md:flex-row gap-4">
        <SideBar />
        <Slider />
      </div>
      <Features />
      <Sponsors />
      <TopCategories />
      <PopularDepartments />
      <Sponsors />
      <Clothing category="clothing" />
      <Clothing category={"fragrance"} />
      <OfferCardFullWidth />
      <Clothing category={"laptop"} />
    </div>
  );
}
