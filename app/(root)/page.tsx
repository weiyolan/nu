import Image from "next/image";
import { Sprout } from "lucide-react";

export default function page() {
  return (
    <div className="w-full h-screen flex overflow-hidden relative ">
      <Image
        src="/haar.jpg"
        // className=""
        alt="Cheveux"
        // onLoad={() => setLoaded(true)}
        className={`select-none object-cover object-center`}
        // width={1280}
        fill
        // height={5922}
        // quality={90}
        priority
      />
      <div className="w-48 h-48 absolute bg-white/60 -right-4 top-4 blur-3xl md:hidden"></div>
      <div className="flex flex-col items-start absolute top-12 md:top-2/3 pl-4 md:-translate-y-1/2 left-0 md:pl-12">
        <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104.88 104.88">
          <path
            className="fill-black"
            d="M91.52,67.04c-3.54,3.29-7.21,3.93-7.54-1.68c-0.21-3.49,0.48-7.05,1.14-10.45
		c1.82-9.34,4.76-18.43,7.07-27.65c1.41-5.62-7.14-7.99-8.68-2.39c-0.57,2.08-1.15,4.17-1.73,6.25c-1.19,4.03-2.48,8.16-3.64,12.32
		c-0.82,2.61-1.66,5.21-2.57,7.79c-2.97,8.47-6.03,17.16-10.56,25.01c-1.41,2.45-3.95,4.48-6.13,3.55
		c-1.58-0.68-2.41-2.35-2.41-4.96c-0.01-2.61,1.61-8.83,2.71-12.78c2.64-9.54,5.8-18.92,8.94-28.3c1.84-5.5-6.84-7.87-8.68-2.39
		c-4.25,12.69-9.1,25.6-11.59,38.79c-1.55,8.19,3.41,20.25,13.51,18.67c7.28-1.14,11.95-8.75,15.29-16.1
		c1.13,2.29,2.88,4.19,5.46,5.27c5.8,2.44,11.52-0.62,15.77-4.57C102.13,69.45,95.76,63.09,91.52,67.04z"
          />
          <path
            className="fill-black"
            d="M41.35,82.27c-3.14,0.97-3.32-0.89-3.06-3.96c0.3-3.49,1.42-6.99,2.4-10.34c2.23-7.57,4.74-15.07,7.14-22.59
		c2.32-7.25,5-14.54,6.8-21.94c1.2-4.93,1.69-11.09-2-15.15c-8.88-9.76-18.53,2.48-23.67,10.81c-1.11-2.7-3.08-4.96-6.01-6.21
		c-5.8-2.47-11.52,0.55-15.88,4.34c-4.38,3.81,2.01,10.15,6.36,6.36c3.44-3,7.7-3.62,7.62,1.9c-0.05,3.78-1.33,7.79-2.32,11.4
		c-2.38,8.72-5.74,17.13-8.52,25.72c-1.8,5.54,6.78,7.82,8.68,2.39c0.81-2.33,1.64-4.67,2.47-7c1.21-3.25,2.49-6.56,3.68-9.9
		c2.72-6.97,5.71-13.83,9.32-20.4c1.11-2.01,8.66-16.46,11.81-13.05c1.38,1.49-0.12,5.94-0.57,7.59c-1,3.62-2.18,7.2-3.3,10.78
		c-4.22,13.48-9.95,27.15-12.44,41.09c-0.84,4.66-1.34,9.98,1.95,13.85c3.31,3.89,7.3,4.39,11.94,2.96
		C49.26,89.24,46.9,80.55,41.35,82.27z"
          />
        </svg>
        <h1 className="pl-2 text-3xl mb-2 leading-normal tracking-wide whitespace-pre-wrap">{"Le shampoing solide\nà base de levure de bière"}</h1>
        <h2 className="pl-2 flex items-center">
          Website coming soon <Sprout className="inline-flex ml-1" strokeWidth={1.5} />
        </h2>
      </div>
    </div>
  );
}
