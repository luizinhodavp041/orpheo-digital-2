import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Title() {
  return (
    <div className="w-[357px] h-[120px] mx-auto flex items-center justify-center">
      <h1
        className={`${bebasNeue.className} text-[100px] leading-none text-white`}
      >
        ORPHEO
      </h1>
    </div>
  );
}
