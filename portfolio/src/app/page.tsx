"use client";

import Image from "next/image";
import Particles from "./components/background";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 -z-10">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center font-sans bg-zinc-50/80 dark:bg-black/80 backdrop-blur-sm">
        <div className="flex w-full max-w-3xl flex-col items-center justify-between py-32 px-6 sm:px-16 sm:items-start">
          
          {/* Logo */}
          

          {/* Text Section */}
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              My Portfolio<br />
              NP
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Looking for a starting point  
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black text-white px-5 transition-colors hover:bg-[#383838] dark:bg-white dark:text-black dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://vercel.com/new"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={16}
                height={16}
              />
              Deploy Now
            </a>

            <a
              className="flex h-12 w-full items-center justify-center rounded-full border border-black/10 dark:border-white/20 px-5 transition-colors hover:border-transparent hover:bg-black/5 dark:hover:bg-white/10 md:w-[158px]"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
