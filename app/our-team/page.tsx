import Card from "@/components/home/card";
import { LINKEDIN_LINK, MOTTO, SIGNUP } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
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
      <div className="z-10 w-full max-w-5xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-blue-950 to-blue-700 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Our Team
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nesciunt fugiat officiis ducimus enim. Explicabo ipsa adipisci quasi fugit quisquam, expedita assumenda animi vitae, numquam perferendis tempore eius accusantium eos!
        </p>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === "Beautiful, reusable components" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
          />
        ))}
      </div>
    </>
  );
}

const features = [
  {
    title: "Joe Dunikowski",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam rem quisquam architecto libero est, eligendi voluptas, vitae ...",
    demo: (
      <a href={LINKEDIN_LINK}>
        <Image className="object-cover object-center rounded-full"
          src={require("./jDunikowski.jpeg")}
          alt="Joe Dunikowski Profile Pic"
          width={170}
          height={170}
          unoptimized
        />
      </a>
    ),
  },
  {
    title: "JP Rezendes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam rem quisquam architecto libero est, eligendi voluptas, vitae ...",
    demo: (
      <a href={LINKEDIN_LINK}>
        <Image className="object-cover object-center rounded-full"
          src={require("./jpRezendes.jpeg")}
          alt="JP Rezendes Profile Pic"
          width={170}
          height={170}
          unoptimized
        />
      </a>
    ),
  },
  {
    title: "Vincent Cavanna",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam rem quisquam architecto libero est, eligendi voluptas, vitae ...",
    demo: (
      <a href={LINKEDIN_LINK}>
        <Image className="object-cover object-center rounded-full"
          src={require("./vincentC.jpg")}
          alt="Vincent Cavanna Profile Pic"
          width={170}
          height={170}
          unoptimized
        />
      </a>
    ),
  }
];
