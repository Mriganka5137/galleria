import GalleryCard from "@/components/shared/GalleryCard";
import { details } from "@/lib/details";

export default function Home() {
  return (
    <main className=" min-h-screen h-fit columns-1 md:columns-2 lg:columns-4 gap-10 pb-10 font-libre-baskerville">
      {details.map((detail, index) => (
        <GalleryCard key={index} detail={detail} index={index} />
      ))}
    </main>
  );
}
