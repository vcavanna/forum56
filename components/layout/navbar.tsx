"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";

export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full flex justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-start w-full space-x-20">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="Forum 56 Logo"
              width="250"
              height="68"
              className="mr-2 rounded-sm"
            ></Image>
          </Link>
          <Link href="/our-story"
            className="text-blue-950 font-display text-xl">
            Our Story
          </Link>
          <Link href="/our-team"
            className="text-blue-950 font-display text-xl">
            Our Team
          </Link>
          <Link href="/events"
            className="text-blue-950 font-display text-xl">
            Events
          </Link>
          {/* <div>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                onClick={() => setShowSignInModal(true)}
              >
                Sign In
              </button>
            )}
          </div> */}
        </div>
      </div>
    </>
  );
}
