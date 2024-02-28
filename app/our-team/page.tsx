import Card from "@/components/home/card";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <div className="z-10 w-full max-w-5xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-blue-950 to-blue-700 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Our Team
        </h1>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, filePath, link, imgAlt }) => (
          <a href={link} key={title} target="_blank" rel="noreferrer">
            <Card
              title={title}
              description={description}
              demo={<Image className="object-cover object-center rounded-full"
                  src={require(`${filePath}`)}
                  alt={imgAlt}
                  width={170}
                  height={170}
                  unoptimized
                />
              }
            />
          </a>
        ))}
      </div>
    </>
  );
}

const features = [
  {
    title: "Joe Dunikoski",
    description:
      "Co-founder & Executive Director",
    link: "https://www.linkedin.com/in/joseph-dunikoski/",
    filePath: "./jDunikowski.jpeg",
    imgAlt: "Joe Dunikoski Profile Pic",
  },
  {
    title: "JP Rezendes",
    description:
      "Co-founder & Director of Operations",
    link: "https://www.linkedin.com/in/jprezendes/",
    filePath: "./jpRezendes.jpeg",
    imgAlt: "JP Rezendes Profile Pic",
  },
  {
    title: "Joseph Moynihan",
    description:
      "Co-founder & Director of Strategy",
    link: "https://www.linkedin.com/in/joseph-moynihan-0586051b9/",
    filePath: "./jMoynihan.jpeg",
    imgAlt: "Joseph Moynihan Profile Pic",
  },
  {
    title: "Molly Zepeda",
    description:
      "Co-founder",
    link: "https://www.linkedin.com/in/mollyzepeda1/",
    filePath: "./mZepeda.jpg",
    imgAlt: "Molly Zepeda Profile Pic",
  },
  {
    title: "Luke Posegate",
    description:
      "Co-founder",
    link: "https://www.linkedin.com/in/luke-posegate/",
    filePath: "./lPosegate.jpeg",
    imgAlt: "Luke Posegate Profile Pic"
  },
  {
    title: "Vincent Cavanna",
    description:
      "Website and Design",
    link: "https://www.linkedin.com/in/vincent-cavanna/",
    filePath: "./vincentC.jpg",
    imgAlt: "Vincent Cavanna Profile Pic",
  }
];
