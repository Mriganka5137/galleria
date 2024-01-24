import { details } from "@/lib/details";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen h-fit columns-1 md:columns-2 lg:columns-4 gap-10 pb-10 font-libre-baskerville">
      {details.map((detail, index) => (
        <div key={index} className="mb-10 relative group cursor-pointer">
          <Image
            src={detail.images.thumbnail}
            alt="gallery"
            width={1000}
            height={1000}
            className=""
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-gray-400/10 px-8 py-8 opacity-80 flex flex-col justify-end group-hover:to-gray-400/60 transition-all duration-500 ease-in-out">
            <div>
              <h3 className="text-2xl  text-[24px] text-white ">
                {detail.name}
              </h3>
              <p className="text-white text-[13px] mt-1.5 ">
                {detail.artist.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
