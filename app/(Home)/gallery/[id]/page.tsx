import DetailsContainer from "@/components/shared/DetailsContainer";
import ImageContainer from "@/components/shared/ImageContainer";
import { details } from "@/lib/details";
import React from "react";
interface Props {
  params: {
    id: string;
  };
}

const page = ({ params: { id } }: Props) => {
  const detail = details.find((item, index) => index === +id - 1);
  return (
    <div className=" relative detail-page flex  w-full font-libre-baskerville h-[650px] ">
      <ImageContainer src={detail?.images.hero.large!} />
      <div className="absolute bg-white w-[445px] h-fit top-0 right-1/3 px-16 z-10 pb-16">
        <h2 className=" text-[56px] font-semibold leading-[64px]">
          {detail?.name}
        </h2>
        <p className="text-color-gray-dark mt-6">{detail?.artist.name}</p>
      </div>
      <DetailsContainer
        year={detail?.year}
        description={detail?.description}
        source={detail?.source}
      />
    </div>
  );
};

export default page;
