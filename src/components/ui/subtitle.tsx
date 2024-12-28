import { neueRegrade } from "@/lib/fonts";

export default function Subtitle() {
  return (
    <div className="w-[237px] h-[38px] flex items-center justify-center">
      <h2
        className={`${neueRegrade.className} text-text text-[30px] tracking-[0.7em] font-medium`}
      >
        DIGITAL
      </h2>
    </div>
  );
}
