import { ArrowRight } from "lucide-react";

const imgs = [
  "/images/slider/1.png",
  "/images/slider/2.png",
  "/images/slider/3.png",
];

const Photos = () => {
  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {imgs.map((imageUrl) => (
          <img key={imageUrl} src={imageUrl} />
        ))}
      </div>
      <div className="text-greenSecondary absolute right-4 bottom-8 flex space-x-2 items-center h-10 opacity-80">
        <p className="text-xl capitalize bg-white h-10 flex items-center px-4 rounded-full">
          See more photos
        </p>
        <div className="bg-white size-10 flex items-center justify-center rounded-full shadow-scrollDown cursor-pointer">
          <ArrowRight size={32} />
        </div>
      </div>
    </div>
  );
};

export default Photos;
