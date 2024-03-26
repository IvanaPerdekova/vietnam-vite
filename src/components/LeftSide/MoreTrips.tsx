import { ArrowDown } from "lucide-react";

const MoreTrips = () => {
  return (
    <div className="absolute bottom-4 flex space-x-6 items-center">
      <div className="bg-white size-14 flex items-center justify-center rounded-full shadow-scrollDown cursor-pointer">
        <ArrowDown size={32} color="#789376" />
      </div>
      <p className="text-main text-xl capitalize">More short trips</p>
    </div>
  );
};

export default MoreTrips;
