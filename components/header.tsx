import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-col flex-1 items-center bg-accent w-full h-fit">
      <Image
        className="dark:invert h-5 w-[100px]"
        src="/public/temp_logo.jpg"
        alt="ReServe logo"
        width={100}
        height={20}
        priority
      />
    </div>
  );
}