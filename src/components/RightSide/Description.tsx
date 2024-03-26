import { ArrowRight } from "lucide-react";

const Description = () => {
  return (
    <div className="flex space-x-4">
      <div className="w-1 bg-greenSecondary h-full rounded-xl" />

      <div className="flex text-gray-500 flex-col space-y-8">
        <p className="max-w-[800px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
          eveniet dolor expedita, aliquid sapiente odit. Provident tempora
          dolorem ea nisi voluptate repudiandae aliquid soluta iusto totam,
          maxime nemo quis veritatis.
        </p>
        <button
          type="button"
          className="flex group space-x-3 capitalize bg-orange-500 text-white py-3 w-fit px-10 transition hover:bg-orange-700"
        >
          <p>Book now</p>
          <ArrowRight className="hidden group-hover:block" />
        </button>
      </div>
    </div>
  );
};

export default Description;
