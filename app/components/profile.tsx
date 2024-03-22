"use client";

import Image from "next/image";

export default function Profile() {
  return (
    <div>
      <section
        id="profile"
        className="flex justify-center pt-4vh h-96vh mx-10rem box-border min-h-min-content"
      >
        <div className="md:flex hidden h-400 w-400 my-auto mx-0">
          <Image
            src="/images/profile-pic.svg"
            height={400}
            width={400}
            alt="Nicolas Rosal Profile Pic"
          />
        </div>
        <div className="self-center text-center">
          <p className="text-center">{`Hello, I'm`}</p>
          <h1 className="text-5xl text-center py-3">Nicolas Rosal</h1>
          <p className="text-xl mb-4">Data Scientist</p>
          <div className="flex justify-center gap-4">
            <button
              className="font-normal text-sm transition-all duration-200 ease-in-out py-2 w-32 rounded-full btn-color-2"
              onClick={() => window.open("/NicolasRosalCV.pdf")}
            >
              Download CV
            </button>
            <button
              className="font-normal text-sm transition-all duration-300 ease-in-out py-2 w-32 rounded-full btn-color-1"
              onClick={() => (location.href = "#contact")}
            >
              Contact Info
            </button>
          </div>
          <div className="flex justify-center mt-4 gap-4">
            <Image
              src="/images/linkedInicon.png"
              height={30}
              width={33}
              alt="linkedin icon"
              className="cursor-pointer h-8"
              onClick={() =>
                (location.href = "https://www.linkedin.com/in/nicolasrosal98/")
              }
            ></Image>
            <Image
              src="/images/githubicon.png"
              height={30}
              width={33}
              alt="github icon"
              className="cursor-pointer h-8"
              onClick={() =>
                (location.href = "https://github.com/nicolasrosal98")
              }
            ></Image>
          </div>
        </div>
      </section>
    </div>
  );
}
