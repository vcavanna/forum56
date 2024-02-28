import Image from "next/image";

export default async function Home() {
  return (
    <>
      <div className="z-10 w-full max-w-5xl px-5 xl:px-0 ">
        <Image
        className="w-full pb-10"
        src={require("@/app/stock/CoverImage.png")}
        alt=""></Image>
        <h1
          className="animate-fade-up bg-gradient-to-br from-blue-950 to-blue-700 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Our Story
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          At Forum 56, we realize that many students in 2024 go through their college years without realizing what opportunities await them in the professional world. Founded and managed by students at the University of Dallas, Forum 56 launched in January 2024.
        </p>
      </div>
    </>
  );
}