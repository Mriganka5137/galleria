import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  detail: {
    name: string;
    artist: {
      name: string;
    };
    images: {
      thumbnail: string;
    };
  };
  index: number;
}

const GalleryCard = ({ detail, index }: Props) => {
  return (
    <div className="mb-10 relative group cursor-pointer">
      <Link href={`/gallery/${index + 1}`}>
        <Image
          src={detail.images.thumbnail}
          alt="gallery"
          width={1000}
          height={1000}
          className=""
        />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-gray-400/10 px-8 py-8 opacity-80 flex flex-col justify-end group-hover:to-gray-400/60 transition-all duration-500 ease-in-out">
          <div>
            <h3 className="text-2xl  text-[24px] text-white ">{detail.name}</h3>
            <p className="text-white text-[13px] mt-1.5 ">
              {detail.artist.name}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GalleryCard;
