import { bebasNeue } from "@/lib/fonts";

export default function Title() {
  return (
    <div className="w-[357px] h-[120px] flex items-center justify-center">
      <h1
        className={`${bebasNeue.className} text-text text-[100px] leading-none`}
      >
        ORPHEO
      </h1>
    </div>
  );
}
