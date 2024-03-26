const ImageBanner = () => {
  return (
    <div className="absolute top-0 right-0 shadow-scrollDown bg-white pl-4 pr-10 py-4 rounded-xl">
      <p className="text-greenSecondary font-bold text-2xl">2 Days</p>
      <div className="bg-orange-500 rounded-lg w-[85%] h-1 my-2" />
      <p className="text-xl">$166 per person</p>
    </div>
  );
};

export default ImageBanner;
