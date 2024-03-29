import Card from "@/components/events/card";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="grid w-4/5 gap-10 max-w-screen-2xl grid-cols-1 md:grid-cols-2">
      <div>
      <h1
          className="animate-fade-up bg-gradient-to-br from-blue-950 to-blue-700 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >Events</h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Forum 56 is continually creating events for students and professionals. Learn more about our upcoming events and get connected!
        </p>
      </div>
      <div className="px-5 xl:px-0">
        <div className="grid max-w-screen-2xl animate-fade-up grid-cols-1 gap-5">
          {events.map(({ name, location, date, time, filePath }) => (
            <Card
              key={name}
              title={name}
              location={location}
              date={date}
              time={time}
              demo={
                <Image
                className="w-full h-full pb-10 object-cover object-center"
                src={require(`${filePath}`)}
                alt=""></Image>
              }
              />
          ))}
        </div>
      </div>
    </div>
  );
}

const events = [
  // {
  //   name: "Happy Hour",
  //   location: "Celestial",
  //   date: "Wednesday February 21st, 2024",
  //   time: "TBD",
  //   filePath: "./happyHour.jpg"
  // },
  {
    name: "The BRIEF Lab Communications Workshop: Emails",
    location: "University of Dallas",
    date: "Monday March 4th, 2024",
    time: "6 pm @ UD Serafy Room",
    filePath: "./CoverImage.png"
  },
  {
    name: "Happy Hour",
    location: "TBD",
    date: "Saturday March 23rd, 2024",
    time: "TBD",
    filePath: "./happyHour.jpg"
  },
  {
    name: "Resume Shark Tank",
    location: "TBD",
    date: "Wednesday April 3rd, 2024",
    time: "TBD",
    filePath: "./sharkTank.jpg"
  },
  {
    name: "Speed Networking",
    location: "TBD",
    date: "Wednesday April 24th, 2024",
    time: "TBD",
    filePath: "./happyHour.jpg"
  },
]
