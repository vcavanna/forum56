import Card from "@/components/home/card";
import { LINKEDIN_LINK, MOTTO, SIGNUP } from "@/lib/constants";
import { Github, Linkedin } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";

export default async function Home() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/steven-tey/precedent",
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every 24 hours
      next: { revalidate: 86400 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0 space-y-24">
        <div>
        <h1
          className="animate-fade-up bg-gradient-to-br from-blue-950 to-blue-700 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Applying the Liberal Arts
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          { MOTTO }
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            href={SIGNUP}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Join Our Network</p>
          </a>
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href={LINKEDIN_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
            <p>
              <span className="hidden sm:inline-block">Follow us on Linkedin</span> 
            </p>
          </a>
          </div>

        </div>
        <div>
          <h2
            className="animate-fade-up bg-gradient-to-br from-blue-950 to-blue-700 bg-clip-text text-center font-display text-2xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-5xl md:leading-[5rem]"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >Our Plan</h2>
          <p
            className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >Put students and professionals in the same room, make them comfortable, and give them something interesting to talk about. A liberally educated student has read conversation after conversation - and studied what it means to be a friend. We believe in that education.</p>

        </div>
        <div>
          <h2
            className="animate-fade-up bg-gradient-to-br from-blue-950 to-blue-700 bg-clip-text text-center font-display text-2xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-5xl md:leading-[5rem]"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >Our Goal</h2>
        <p
            className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >We want to create enviroments where current students can interact and meet established professionals who have been in their shoes. We seek to promote real business - built on real, personal, and lasting connections.</p>
        </div>
      </div>
      
    </>
  );
}
