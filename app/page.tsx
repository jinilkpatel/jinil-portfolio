'use client'
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { InlineWidget } from "react-calendly";
import { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { LinkPreview } from "@/components/ui/link-preview";
import { PiDiscordLogoDuotone, PiDiscordLogoFill, PiGithubLogoFill, PiLinkedinLogoFill, PiMailboxFill } from "react-icons/pi";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link as ScrollLink, Element } from "react-scroll";
import { Analytics } from '@vercel/analytics/react';
const projects = [
  {
    title: "Federated Learning",
    description: "Prediction of Covid-19 CT Scan images by leveraging deep learning models.",
    date: "2022",
    image: "/Images/fl.png",
  },
  {
    title: "BF7 Variant real time analysis",
    description: "A real time analysis of outspread of Covid and vaccination drives accross the globe",
    date: "2023",
    image: "/Images/analysis.jpg",
  },
  {
    title: "Dairy manager App",
    description:"One stop for all cattle owners to manage dairy production and expense",
    date: "2023",
    image: "/Images/dairy.jpg",
  },
  {
    title: "Altery",
    description:"Public aid portal portal using Amazon Web Services(AWS) and React",
    date: "2024",
    image: "/Images/aws.png",
  },

]

const education =[
  {
    title: "Master of Computer Science",
    description: "New Jersey Institute of Technology",
    date:"2023-2025",
    image:"/Images/njit.png"
  },
  {
    title: "Bachelor Of Technology in Computer Science",
    description: "Nirma University",
    date:"2019-2023",
    image:"/Images/nirma.png"
  },
]

const experience =[
    
  {
      title:"Software Engineer | Intern",
      description:"Kintsugi Global",
      date:"May-July 2024",
      images:"/Images/kintsugi.jpeg"
  },
  {
    title:"Teaching Assistant ",
    description:"NJIT",
    date:"Jan-May 2024",
    images:"/Images/njit.png"
  },
  {
    title:"Software Engineer",
    description:"Tech holding",
    date:"Jan-Dec 2023",
    images:"/Images/TH.jpeg"
  },
  {
    title:"Software Engineer",
    description:"TM Solutech",
    date:"Jan-May 2022",
    images:"/Images/tm.jpeg"
  },
  {
    title:"Software Intern | Android",
    description:"NullClass",
    date:"Dec-Jan 2022",
    images:"/Images/nullclass.png"
  },
  {
    title:"Computer Science Subject Expert",
    description:"Chegg",
    date:"Mar-Aug 2021",
    images:"/Images/chegg.png"
  },
]

const navbar =[
  {
    title: "Projects",
    link: "projects",
  },
  {
    title:"Work Experience",
    link:"work",
  },
  {
    title:"Education",
    link:"education",
  }
]

export default function Home() {

  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  })
  return (
    <div>
      <motion.div 
      initial={{y:0, opacity:0}} 
      animate={{y:0, opacity:10}}
      transition={{duration:2}}
      className="min-h-screen inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] 
      [background-size:16px_16px]">

        <motion.div
        animate={isHidden ? 'hidden' : 'visible'} 
        whileHover='visible'
        onFocusCapture={() => setIsHidden(false)}
        variants={{
          hidden : {
            y: '-90%'
          },
          visible : {
            y: '0%'
          }
        }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 z-10 md:flex w-full justify-center pt-3 hidden"
        >
          <div className="flex bg-white gap-x-4 p-4 items-center rounded-xl">
            {navbar.map((item) => (
              <ScrollLink
              key={item.title}
              to={item.link}
              smooth={true}
              duration={500}
              className='border px-4 py-3 rounded-xl text-center flex
               items-center justify-center
                cursor-pointer hover:bg-gray-100'>
                {item.title}
                </ScrollLink>
            ))}

            <Dialog>
              <DialogTrigger className="border px-4 py-3 rounded-xl 
              text-center flex items-center justify-center
               cursor-pointer hover:bg-gray-50">Contact</DialogTrigger>
              <DialogContent>
                <InlineWidget url="https://calendly.com/jinil3108" />
              </DialogContent>
            </Dialog>   

          </div>

        </motion.div>

        <div className="md:w-3/5 mx-auto px-6 md:px-0 pb-0">
        <div className="pt-10 justify-end items-center flex underline md:hidden">
        <Dialog>
        <DialogTrigger>Contact</DialogTrigger>
          <DialogContent>
            <InlineWidget url="https://calendly.com/jinil3108"/>
          </DialogContent>
        </Dialog>

        </div>

        <div className="md:flex md:gap-x-10 items-center md:pt-28">
          <Image
              src={"/Images/jinil.jpg"} alt={"Jinil"}
              width={10000}
              height={10000}
              className="rounded-xl w-40 mt-4" 
            />

            <div className="space-y-2">
            <div className="text-4xl my-4">
            👋
              </div>

              <h1 className="text-xl lg:text-3xl font-semibold">
               <Typewriter
               words={[' Hi there! I am Jinil an aspiring Software Developer based in United States.']}
              />
              </h1>
              <p className="text-muted-foreground text-lg md:pr-9">
                I Like coding and learning more and more about new technologies. Here is my
                <LinkPreview
                url="https://www.linkedin.com/in/jinil-k-patel/"
                className="font-bolf text-blue-500 underLine">
                  <PiLinkedinLogoFill className="h-6 w-6 inline text-black-500"/>
                  <span className="ml-2 underline">LinkedIn.</span>
                </LinkPreview>
                {" "}I am currently a student at NJIT.
              </p>
              <p className="text-muted-foreground text-lg ">
                Feel free to reach out to me {" "}
                <LinkPreview
                url="https://github.com/jinil3108"
                className="font-bold"
                >
                  <PiGithubLogoFill className="h-6 w-6 inline text-Black-500"/>{" "}
                  <span className="text-black-500 underline">Github</span>
                </LinkPreview>{" "}
                I am always happy to help
              </p>

            </div>
        </div>
        <Element name="projects">
          <h2 className="text-xl pt-10 font-semibold">Projects</h2>
          <div className="grid grid-cols-2 gap-4 mt-5">
            {
              projects.map((project) =>(
                <div
                key={project.title}
                className="border rounded-xl p-4 bg-white">
                  <div className="md:flex items-center justify-between">
                  <div className="md:flex items-center gap-x-4">
                  <Image
                  src={project.image}
                  alt={project.title}
                  width={512}
                  height={512}
                  className="rounded-md w-16 h-16"/>

                  <div className="flex flex-col">
                    <h2 className="text-md font-semibold mt-4">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                    </div>
                    </div>
                    <p className="text-muted-foreground text-sm mt-2 md:mt-0">
                      {project.date}
                    </p>
                </div>
                </div>
                
              ))
            }
          </div>
        </Element>

        {/* project part over work part starts*/}

        <Element name="work">
          <h2 className="text-xl pt-10 font-semibold">
            Work experience
          </h2>
          {experience.map((item)=>(
            <div key={item.title} className="my-4">
              <div className="
              md:flex justify-between
              cursor-pointer items-center border rounded-2xl p-4
              bg-white              
              ">
                <div className="flex items-center gap-x-4">
                  <Image
                  src={item.images}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="rounded-md w-20 p-2"/>

                  <div className="">
                    <h2 className="text-md font-semibold mt-4 md:mt-0">
                      {item.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground text-sm mt-4 md:mt-0">
                    {" "}
                    {item.date}{" "}
                    </div>
                </div>
              </div>
              </div>

          ))}
        </Element>
        
        

        <Element name="education">
          <h2 className="text-xl pt-10 font-semibold">Education</h2>
          {education.map((item)=>(
            <div key={item.title} className="my-4">
              <div className="md:flex justify-between 
              cursor-pointer items-center border rounded-2xl p-4 
              bg-white">
                <div className="flex items-center gap-x-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="rounded-md w-20"
                  />
                  <div className="">
                    <h2 className="text-md font-semibold mt-4 md:mt-0">
                      {item.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {item.description}

                    </p>
                  </div>
                  </div>

                  <div>
                    <div className="text-muted-foreground text-sm mt-4 md:mt-0">
                      {" "}
                      {item.date}{" "}
                    </div>
                  </div>
                </div>
              </div>

          ))}
        </Element>
      </div>
    </motion.div>
    </div>
  );
}
