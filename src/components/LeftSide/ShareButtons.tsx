import { Facebook, Share2, Twitter } from "lucide-react";

const icons = [
  {
    icon: <Facebook size={25} />,
    text: "Facebook",
  },
  {
    icon: <Twitter size={25} />,
    text: "Twitter",
  },
  {
    icon: <Share2 size={25} />,
    text: "Lorem ipsum",
  },
];

const ShareButtons = () => {
  return (
    <div className="flex flex-col space-y-6 w-fit absolute">
      {icons.map((item, i) => (
        <div
          key={i}
          className="group flex flex-row items-center space-x-4 hover:bg-main rounded-full transition-all cursor-pointer"
        >
          <div className="border bg-white group-hover:bg-main group-hover:text-white group-hover:border-0 border-green-600 size-12 flex items-center justify-center rounded-full">
            {item.icon}
          </div>
          <p className="pr-4 hidden group-hover:block text-white">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ShareButtons;
