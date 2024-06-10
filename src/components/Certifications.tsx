import { certifications } from "@/data";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui";

const Certifications = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        My
        <span className="text-purple"> professional achievements</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-x-24">
        {certifications.map((certificate) => (
          <CardContainer className="inter-var" key={certificate.link}>
            <CardBody className="bg-[#000319] relative group/card hover:shadow-2xl hover:shadow-indigo-500/[0.1] border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white"
              >
                {certificate.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-sm max-w-sm mt-2 text-neutral-300"
              >
                {certificate.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={certificate.img}
                  height="1000"
                  width="1000"
                  className="h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-end items-center mt-5">
                <a
                  href={certificate.link}
                  target="_blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                >
                  View
                </a>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
