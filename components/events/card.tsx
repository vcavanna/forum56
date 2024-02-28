import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";

export default function Card({
  title,
  location,
  demo,
  large,
  date,
  time,
}: {
  title: string;
  location: string;
  demo: ReactNode;
  large?: boolean;
  date: string;
  time: string;
}) {
  return (
    <div
      className={`scroll mt-2 snap-center relative col-span-1 h-[128] overflow-hidden rounded-xl border border-gray-200 shadow-md bg-white ${
        large ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex h-60 items-center justify-center">{demo}</div>
      <div className="mx-auto max-w-md text-center">
        <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent [text-wrap:balance] md:text-3xl md:font-normal">
          {title}
        </h2>
        <div className="mt-2 leading-normal text-center text-gray-500 [text-wrap:balance] md:text-xl">
          {location} - {date}
        </div>
        <div className="mt-2 mb-5 leading-normal text-center text-gray-400 [text-wrap:balance] md:text-xl">
          Time: {time}
        </div>
      </div>
    </div>
  );
}
