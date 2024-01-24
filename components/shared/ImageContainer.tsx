import Image from "next/image";
import React from "react";
interface Props {
  src: string;
}

const ImageContainer = ({ src }: Props) => {
  return (
    <div className=" w-1/2 relative">
      <Image src={src} alt="gallery" height={500} width={500} />
    </div>
  );
};

export default ImageContainer;
