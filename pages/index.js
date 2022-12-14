import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import Image from "next/image";
import profile from "../public/profile.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import Lottie from "react-lottie";

import animationData from "../public/about.json";
import animationData2 from "../public/skills3.json";

// import {Parallax} from "react-scroll-parallax"

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
  };

  return (
    <div>
      <Head>
        <title>Ankit's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <main className=" bg-white px-10">
        <section className=" min-h-screen">
          {/* <Parallax speed={-10}> */}
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">meankitdas</h1>
            <ul className="flex items-center">
              <li className="invisible lg:visible">
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li className=" duration-500 hover:scale-110">
                <a
                  href="#"
                  className=" bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 rounded-md ml-5 font-code text-sm "
                >
                  R??sum??
                </a>
              </li>
            </ul>
          </nav>
          {/* </Parallax> */}
          <div className="w-100 flex justify-center">
            <Image src={profile} width={350} height={350} />
          </div>
          <div className="text-center p-10">
            <h1
              className="text-2xl lg:text-5xl  py-2 text-teal-600 font-burtons"
              id="bio"
            >
              {/* Hi, I'm Ankit Das */}
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hi, I'm Ironman!")
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .pauseFor(500)
                    .deleteAll()
                    .callFunction(() => {
                      console.log("All strings were deleted");
                    })
                    .typeString("Sorry! I'm not Ironman.")
                    .pauseFor(1500)
                    .deleteAll()
                    .callFunction(() => {
                      console.log("All strings were deleted");
                    })
                    .typeString("I'm Ankit Das")
                    .start();
                }}
              />
            </h1>
            {/* <p id="demo"></p> */}
            <h3 className="text-sm font-bold lg:font-normal lg:text-2xl py-2 font-code ">
              A Full-Stack Developer
            </h3>
            <p className="text-sm lg:text-md py-5 leading-8 text-gray-800 font-code ">
              "Always code as if the guy who ends up maintaning your code will
              be a violent psychopath who knows where you live."
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-10 py-3 text-gray-600 ">
            <a
              href="https://twitter.com/its_ankitdas/"
              className="hover:text-black"
              target="_blank"
            >
              <AiFillTwitterCircle />
            </a>
            <a
              href="https://github.com/meankitdas/"
              className="hover:text-black"
              target="_blank"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/itsankitdas/"
              className="hover:text-black"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://www.instagram.com/its.ankitdas/"
              className="hover:text-black"
              target="_blank"
            >
              <AiFillInstagram />
            </a>
          </div>
        </section>

        {/* Screen ----- 2 */}

        <section className=" min-h-screen">
          <div className="h-screen lg:flex ">
            <div className=" flex flex-col justify-center lg:w-2/5  ">
              <div className="p-10">
                <h3 className="lg:text-2xl font-burtons  text-gray-800 ">
                  let's Introduce myself
                </h3>
                <h4 className="lg:text-4xl  tracking-widest font-burtons font-bold text-gray-600 md:text-3xl sm:text-2xl ">
                  About me
                </h4>
              </div>
              <div className="p-10 pt-0 text-sm lg:text-md ">
                <p className="font-code">
                  This is a{" "}
                  <span className="font-bold text-teal-600">18 years</span> old
                  boy from Odisha, India. Pursuing{" "}
                  <span className="font-bold text-teal-600">Btech</span> in{" "}
                  <span className=" font-bold text-teal-600">
                    Jain (deemed-to-be) University
                  </span>
                  . I started my programming journey when I was in
                  <span className=" font-bold text-teal-600"> 9th Class</span>.
                  I have
                  <span className=" font-bold text-teal-600">
                    {" "}
                    4 years of experience
                  </span>
                  . I have a zeal for learning{" "}
                  <span className=" font-bold text-teal-600">
                    new technologies
                  </span>
                  .
                </p>
              </div>
            </div>
            <motion.div className="py-10 my-10 ">
              <Lottie options={defaultOptions} />
            </motion.div>
          </div>
        </section>

        {/* Screen ----- 3 */}

        <section className=" min-h-screen">
          <div className="h-screen lg:flex ">
            <div className="py-10 my-10 hi ">
              <Lottie options={defaultOptions2} />
            </div>
            <div className="flex flex-col justify-center lg:w-2/5  ">
              <div className="p-10">
                <h3 className="lg:text-2xl font-burtons  text-gray-800 ">
                  Something I know
                </h3>
                <h4 className="lg:text-4xl  tracking-widest font-burtons font-bold text-gray-600 md:text-3xl sm:text-2xl ">
                  Skills
                </h4>
                <div className="p-10 pt-0 text-sm lg:text-md ">
                  {/* <p className="font-code"></p> */}
                </div>
                <div>
                  <p className="font-burtons py-2 text-sm lg:text-md">
                    {" "}
                    Frontend
                  </p>
                  <div className="pb-3">
                    <div className="w-full bg-gray-200 rounded-full">
                      <motion.div
                        className="bg-teal-600 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full w-0"
                        animate={{
                          width: "0%",
                        }}
                        whileInView={{
                          width: "85%",
                          transition: { duration: 2 },
                        }}
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 1 },
                        }}
                      >
                        85%
                      </motion.div>
                    </div>
                  </div>

                  <p className="font-burtons py-2 text-sm lg:text-md ">
                    {" "}
                    Backend
                  </p>
                  <div className="pb-3">
                    <div className="w-full bg-gray-200 rounded-full">
                      <motion.div
                        className="bg-teal-600 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full w-0"
                        animate={{
                          width: "0%",
                        }}
                        whileInView={{
                          width: "95%",
                          transition: { duration: 2 },
                        }}
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 1 },
                        }}
                      >
                        95%
                      </motion.div>
                    </div>
                  </div>

                  <p className="font-burtons py-2 text-sm lg:text-md"> UI/UX</p>
                  <div className="pb-3">
                    <div className="w-full bg-gray-200 rounded-full">
                      <motion.div
                        className="bg-teal-600 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full w-0"
                        animate={{
                          width: "0%",
                        }}
                        whileInView={{
                          width: "65%",
                          transition: { duration: 2 },
                        }}
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 1 },
                        }}
                      >
                        <p>65%</p>
                      </motion.div>
                    </div>
                  </div>

                  <p className="font-burtons py-2 text-sm lg:text-md"> Logic</p>
                  <div className="pb-3">
                    <div className="w-full bg-gray-200 rounded-full">
                      <motion.div
                        className="bg-teal-600 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full w-0"
                        animate={{
                          width: "0%",
                        }}
                        whileInView={{
                          width: "90%",
                          transition: { duration: 2 },
                        }}
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 1 },
                        }}
                      >
                        90%
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" min-h-screen"></section>
      </main>
    </div>
  );
}
