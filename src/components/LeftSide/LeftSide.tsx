import ShareButtons from "./ShareButtons";
import MoreTrips from "./MoreTrips";
import ImageBanner from "./ImageBanner";

const LeftSide = () => {
  return (
    <div className="w-full flex flex-row items-center relative">
      <ShareButtons />
      <ImageBanner />
      <div className="flex justify-center w-full">
        <img src="/images/hero.png" className="md:ml-8 max-h-[620px]" />
      </div>
      <MoreTrips />
    </div>
  );
};

export default LeftSide;
