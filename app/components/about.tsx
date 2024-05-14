"use client";

import Image from "next/image";

export default function About() {
  return (
    <div>
      <section id="about">
        <p className="text-center pt-10">Get To Know More</p>
        <h1 className="text-4xl text-center">About Me</h1>
        <div className="flex gap-16 h-4/5">
          <div className="md:flex hidden min-h-1500 min-w-1500 my-auto mx-0">
            <Image
              src="/images/about-pic.jpg"
              height={1500}
              width={1500}
              alt="About Picture"
              className="rounded-2xl filter grayscale"
            />
          </div>
          <div className="flex justify-center flex-col">
            <div className="flex mb-8 mt-8 gap-8">
              <div className="flex flex-col justify-center items-center p-10 rounded-lg border border-gray-300 text-center gap-4">
                <Image
                  src="/images/experience-pic.png"
                  height={50}
                  width={40}
                  alt="Experience Icon"
                  className="cursor-pointer h-8"
                />
                <h3>Experience</h3>
                <p>
                  2+ years <br />
                  Data Analysis
                </p>
              </div>
              <div className="flex flex-col justify-center items-center p-10 rounded-lg border border-gray-300 text-center gap-4">
                <Image
                  src="/images/education-pic.png"
                  height={50}
                  width={35}
                  alt="Education Icon"
                  className="cursor-pointer h-8"
                />
                <h3>Education</h3>
                <p>
                  BSc Management Science <br />
                  Data Analysis
                </p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Experienced data analyst skilled at leveraging data to optimise
                processes and enhance customer experiences. Demonstrated success
                in increasing data accessibility by 30% and reducing dashboard
                creation time by 50%. Seeking opportunities to apply machine
                learning solutions to real-world challenges. Possessing a strong
                technical background, coupled with effective stakeholder
                management, project coordination, communication, and
                interpersonal skills. Committed to continuous learning and
                staying up-to-date with the latest technologies to drive success
                in both present and future endeavors.
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/images/arrow.png"
          alt="arrow icon"
          className="cursor-pointer h-8 arrow"
          height={40}
          width={40}
          onClick={() => (location.href = "#experience")}
        />
      </section>
    </div>
  );
}
