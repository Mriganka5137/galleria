import Link from "next/link";
import React from "react";
interface Props {
  year?: number;
  description?: string;
  source?: string;
}
const DetailsContainer = ({ year, description, source }: Props) => {
  return (
    <div className=" w-1/2  relative flex flex-col  pl-40 justify-between pb-20">
      <h3 className="absolute text-[200px] right-0 text-color-gray-light z-0 -top-16">
        {year}
      </h3>
      <p className="text-left w-[350px] mt-36 text-[14px] text-color-gray-dark z-50 leading-[200%]">
        {description}
      </p>
      <Link
        href={source!}
        className=" uppercase text-[9px] text-color-gray-dark underline "
      >
        Go to source
      </Link>
    </div>
  );
};

export default DetailsContainer;
