"use client";

import Image from "next/image";

export default function About() {
  return (
    <div>
      <section id="about">
        <p className="text-center pt-10">Get To Know More</p>
        <h1 className="text-4xl text-center py-3">About Me</h1>
        <div className="section-container">
          <div className="md:flex hidden h-400 w-400 my-auto mx-0">
            <Image
              src="/images/about-pic.svg"
              height={400}
              width={400}
              alt="About Picture"
              className="about-pic"
            />
          </div>
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <Image
                src="/images/experience-pic.svg"
                height={400}
                width={400}
                alt="Experience Icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>
                2+ years <br />
                Data Analysis
              </p>
            </div>
            <div className="details-container">
              <Image
                src="/images/education-pic.svg"
                height={400}
                width={400}
                alt="Education Icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                BSc Management Science <br />
                Data Analysis
              </p>
            </div>
            <div className="text-container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium eius distinctio a accusantium impedit, minus
                deleniti magnam inventore quibusdam nulla vel quo dicta
                assumenda veniam cumque natus, tenetur aperiam. Accusantium fuga
                repellat, vel quod repellendus unde doloremque nulla harum
                possimus esse ipsum tempora consequatur et perferendis dolores
                placeat voluptates ex.
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/images/arrow.png"
          alt="arrow icon"
          className="icon arrow"
          height={120}
          width={120}
          onClick={() => (location.href = "./experience")}
        />
      </section>
    </div>
  );
}
