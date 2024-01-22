import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import img from "./images/dev-ed-wave.png";
import design from "./images/design.png";
import code from "./images/code.png";
import consulting from "./images/consulting.png";
import web1 from "./images/web1.png"
import web2 from "./images/web2.png"
import web3 from "./images/web3.png"
import web4 from "./images/web4.png"
import web5 from "./images/web5.png"
import web6 from "./images/web6.png"
import Signout from "./Signout";


const App = () => {

  const buttonClick = () => {
    <Signout />
  }

  return (
    <div>
      <main className=" bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className=" py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Gopi D</h1>
            <ul className=" flex items-center">
              <li className=" cursor-pointer text-2xl">
                <BsFillMoonStarsFill />
              </li>
              <li>
                {" "}
                <a
                  className=" bg-gradient-to-r  from-cyan-500 to-teal-500 text-white hover:bg-teal-200 px-4 py-2 rounded-md ml-8"
                  href="https:/google"
                >
                  Resume
                </a>{" "}
             <button className=" bg-green-400 py-1.5 px-4 rounded hover:text-white hover:bg-amber-300" onClick={buttonClick}>
              Click Me
             </button>

              </li>
            </ul>
          </nav>

          <div className=" text-center p-10">
            <h2 className=" text-5xl py-2 text-teal-600 font-medium md:text-6xl">Gopi D</h2>
            <h3 className=" text-2xl md:text-3xl"> Front End Developer</h3>
            <p className=" text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
              Front End Developer, I adore creating functional webpages,
that intuitively solve modern problems.
            </p>
          </div>
          
          <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          
          <div className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96"> 
            <img src={img} alt=""/>
          </div>
        </section>

        <section>
          <div>
            <h3 className=" text-3xl py-1">About</h3>
            <p className=" text-md py-2 leading-8 text-gray-800"> I am a Front End Developer,
             I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using Javascript, React, html, css etc. Working for myself to improve my skills.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className=" text-center shadow-lg p-10 rounded-xl my-10">
              <img src={design} alt="" width={100} height={100} className="mx-auto" />
              <h3 className=" text-lg font-medium pt-8 pb-2">React Project</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Tailwind Css</p>
              <p className="text-gray-800 py-1">Typescript</p>
              <p className="text-gray-800 py-1">Sass</p>
            </div>

            <div className=" text-center shadow-lg p-10 rounded-xl my-10">
              <img src={code} alt="" width={100} height={100} className="mx-auto"/>
              <h3 className=" text-lg font-medium pt-8 pb-2">Javascript Project</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Tailwind Css</p>
              <p className="text-gray-800 py-1">Typescript</p>
              <p className="text-gray-800 py-1">Sass</p>
            </div>

            <div className=" text-center shadow-lg p-10 rounded-xl my-10">
              <img src={consulting} alt="" width={100} height={100} className="mx-auto"/>
              <h3 className=" text-lg font-medium pt-8 pb-2">Shopping Cart</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Tailwind Css</p>
              <p className="text-gray-800 py-1">Typescript</p>
              <p className="text-gray-800 py-1">Sass</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className=" text-3xl py-1">Portfolio</h3>
            <p className=" text-md py-2 leading-8 text-gray-800"> Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for 
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Thank you for visiting my personal portfolio website. Connect with me over socials.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <img src={web1} alt="" className="rounded-lg object-cover" width={"100%"} height={"100%"}/>
            </div>
            <div className="basis-1/3 flex-1">
              <img src={web2} alt="" className="rounded-lg object-cover" width={"100%"} height={"100%"}/>
            </div>
            <div className="basis-1/3 flex-1">
              <img src={web3} alt="" className="rounded-lg object-cover" width={"100%"} height={"100%"}/>
            </div>
            <div className="basis-1/3 flex-1">
              <img src={web4} alt="" className="rounded-lg object-cover" width={"100%"} height={"100%"}/>
            </div>
            <div className="basis-1/3 flex-1">
              <img src={web5} alt="" className="rounded-lg object-cover" width={"100%"} height={"100%"}/>
            </div>
            <div className="basis-1/3 flex-1">
              <img src={web6} alt="" className="rounded-lg object-cover" width={"100%"} height={"100%"}/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
