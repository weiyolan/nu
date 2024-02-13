"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <Image
        src="/apropos_v2.png"
        // className=""
        alt="La page A propos"
        onLoad={() => setLoaded(true)}
        className={`w-full ${loaded ? "opacity-100" : "h-0 opacity-0"} transition-opacity duration-1000`}
        width={1280}
        height={5922}
        quality={100}
        priority
      />
      {/* {!loaded && <div className="w-full my-auto">Téléchargement en cours ... Veuillez patientez.</div>}      */}
      {!loaded && (
        <p className="inline-flex font-mono text-sm self-center ml-[50vw] -translate-x-1/2 mt-[50vh] -translate-y-1/2 justify-center items-center my-auto  border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          {"Téléchargement en cours ... Veuillez patientez."}
          {/* <code className="font-mono font-bold">app/page.tsx</code> */}
        </p>
      )}
    </>
  );
}
