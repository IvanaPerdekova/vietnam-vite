import Description from "./Description";
import Photos from "./Photos";
import Title from "./Title";

const RightSide = () => {
  return (
    <div className="w-full flex flex-col h-full justify-between space-y-10">
      <Title />
      <Description />
      <Photos />
    </div>
  );
};

export default RightSide;
