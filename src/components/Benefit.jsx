import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import Arrow from "../assets/svg/Arrow";
import { benefits } from "../constants";

const Benefit = () => {
  return (
    <Section id="features">
      <div className="container relative z-2  ">
        <Heading
          className="max-w-md lg:max-w-2xl "
          title="Chat smarter, not harder with Brainwave"
        />

        <div className="flex flex-wrap gap-10  md-10">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${benefit.backgroundUrl})`,
              }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]  pointer-events-none">
                <h5 className="h2 mb-5">{benefit.title}</h5>
                <p className="body-2 mb-6 text-n-3">{benefit.text}</p>
                <div className="flex  gap-3 items-center mt-auto">
                  <img
                    src={benefit.iconUrl}
                    width={48}
                    height={48}
                    alt={benefit.title}
                  />
                  <p>Explore More</p>
                  <Arrow />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefit;
