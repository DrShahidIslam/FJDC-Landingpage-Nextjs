"use client";
import fjlogo from "../../../public/fjdclogo.jpg";
import panalogo from "../../../public/panacloudlogo.jpg";
import Image from "next/image";
import { useState } from "react";
import fjdc from "../../../public/fjdc.jpg";
import appication from "../../../public/applications.jpg";
import Link from "next/link";
import qasim from "../../../public/qasim.jpg";
import zia from "../../../public/zia.jpg";

export const programsData = [
  {
    id: "web",
    heading1: "Quarter I: Introduction and Python Programming (3 Months)",
    text1: "",
    heading2:
      "Part 1: Getting started with Generative AI in healthcare and life sciences",
    text2:
      "Before diving into the core concepts of Generative AI, it's important to build a foundational understanding of how AI can be used in health care. The integration of these cutting-edge technologies holds considerable promise in augmenting patient care, facilitating medical research, and alleviating the workload on healthcare professionals. In this module we will investigate the latest advancements in this field, we seek to gain insights into the transformative potential of state-of-the-art AI language models in shaping the future landscape of healthcare.",
    heading3: "Part 2: Python Crash Course",
    text3:
      "Python Crash Course is a fast-paced, thorough introduction to Python that will have you writing programs, solving problems, and making things that work in no time. In this first module, you will learn about basic programming concepts, such as lists, dictionaries, classes, and loops, and practice writing clean and readable code with exercises for each topic. You will also learn how to make your programs interactive and how to test your code safely before adding it to a project.",
    img: <Image src={fjlogo} alt={"web 3.0"}></Image>,
  },
  {
    id: "ai",
    heading1:
      "Quarter II: Prompt Engineering, Data Analytics, and Generative AI (3 Months)",
    text1: "",
    heading2: "Part 1: Prompt Engineering",
    text2: `Before diving into the core concepts of Generative AI, it's important to build a foundational understanding of AI. Here are some resources we will use in class to get you started:
    <a href="https://www.deeplearning.ai/courses/ai-for-everyone/" className="text-blue-500 hover:underline">(1) AI for Everyone Course</a>
    <a href="https://www.youtube.com/watch?v=G2fqAlgmoPo" className="text-blue-500 hover:underline">(2) Introduction to Generative AI</a>
    <a href="https://learn.deeplearning.ai/chatgpt-prompt-eng/" className="text-blue-500 hover:underline">(3) ChatGPT Prompt Engineering</a>
    <a href="https://www.paubox.com/blog/100-chatgpt-prompts-for-healthcare-professionals" className="text-blue-500 hover:underline">(4) 100+ ChatGPT prompts for healthcare professionals</a>
    <a href="https://medium.com/@ismailsaleem/chatgpt-prompts-for-doctors-c2bbdae90131" className="text-blue-500 hover:underline">(5) Prompts for Doctors</a>`,
    heading3: "Part 2: Healthcare Data Analytics using Python",
    text3: `In this module, we will showcase the potential of python to work on clinical data. We will introduce you to some of the powerful applications Python has for handling and manipulating data, conducting statistical analyses, and generating graphs and other visuals. We will be leveraging sample clinical data to power real examples throughout the session.\n a) Data Analytics\n b) Visualizing Data\n c) Robotic Process Automation\n d) Case Studies`,
    heading4: "Part 3: Generative AI for Medicine and Healthcare Professionals",
    text4:
      "GenAI is transforming the practice of medicine. It’s helping doctors diagnose patients more accurately, make predictions about patients’ future health, and recommend better treatments. This module will give you practical experience in applying GenAI to concrete problems in medicine. You will start by understanding the fundamental concepts of Generative AI and its various applications in healthcare. We will work with different Language Model variants like ChatGPT, Med-Palm2, and more. We will harness langchain strategies to enhance the performance of Language Models in various healthcare tasks.",
    img: <Image src={fjlogo} alt={"AI"}></Image>,
  },
];

const Outline = () => {
  const [selectedItem, setSelectedItem] = useState("web");
  const selectedItemData = programsData.find(
    (item) => item.id === selectedItem
  );

  return (
    <section className=" mx-5">
      <Image
        src={fjdc} // Path to your image
        alt="Background image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      />
      <div className="absolute inset-0 bg-white opacity-40 z-10"></div>
      <div className="z-10 relative">
        <h1 className="m-10 text-4xl md:text-5xl font-extrabold text-center text">
          {" "}
          Certified Generative AI Healthcare and Medical Specialist
        </h1>
        <p className="text-center m-6 rounded-xl p-3 text-lg md:text-xl bg-slate-700 text-white">
          Generative AI in healthcare refers to the application of generative
          artificial intelligence techniques and models in various aspects of
          the healthcare industry. It involves using machine learning algorithms
          to generate new and original content that is relevant to healthcare,
          such as medical images, personalized treatment plans, and more.
        </p>
        <div className="flex object-center max-w-screen-lg shadow-lg mx-2 md:mx-40 ">
          <Image src={appication} alt="ai in healthcare"></Image>
        </div>
        <h2 className="text-center m-10 text-xl lg:text-3xl font-bold">
            The Program Designers
          </h2>


        <div className="flex flex-col md:flex-row justify-center m-6 space-y-6 md:space-x-6 md:space-y-0">
          
          <div className="flex flex-col justify-center text-center xl:flex-row shadow-lg">
            <Image
              className="mx-2 w-full md:w-auto"
              src={zia}
              alt={"fjdc"}
              width={200}
              height={150}
            ></Image>{" "}
            Mr. Zia Khan has four masters degrees in Finance (MBA), Accounting
            (MAC), Engineering (MS), and Economics (MA). He is the alumnus of
            Arizona State University (ASU). He is also a Certified Public
            Accountant (CPA) and Certified Management Accountant (CMA) in USA.
            He has over twenty years of experience in business software
            development and specializes in Artificial Intelligence (AI),
            Blockchain technologies, Data Science, Digital Finance and Cloud
            Native Computing. Currently, he is the CEO of Panacloud (Pvt.) Ltd.
          </div>
          <div className="flex flex-col text-center xl:flex-row rounded-lg p-2 justify-center shadow-lg">
            <Image
              className="mx-2 w-full h-full md:w-auto"
              src={qasim}
              alt={"fjdc"}
              width={200}
              height={150}
            ></Image>
            🎓 Education: Master's Degrees in Data Science 📊 Certification:
            Data Analytics Certified by ICAEW 📅 Experience: Over 10 Years in
            Web Software Development 🌟 Specialization: Artificial Intelligence
            (AI) and Data Science 👨‍💼 Mr. Muhammad Qasim brings a wealth of
            knowledge and expertise to our course as the Chief Data Scientist at
            Cancer Clarity LLC in New York, USA. With a strong foundation in
            Data Science, a prestigious Data Analytics certification, and a
            decade of experience in web software development, he is
            well-equipped to guide you through the intricacies of AI and Data
            Science.
          </div>
        </div>
        <h2 className="text-center m-10 text-xl lg:text-3xl font-bold">
            Course Outline
          </h2>
        <div className="mt-10 md:flex md:flex-row gap-x-10 gap-y-8 mb-10">
          <div className="basis-2/12 mx-2">
            {programsData.map((elem) => (
              <div
                key={elem.id}
                onClick={() => setSelectedItem(elem.id)}
                className={`rounded-xl my-6 shadow-sm flex mx-4 text-center items-start cursor-pointer ${
                  selectedItem === elem.id
                    ? "bg-orange-400"
                    : "bg-yellow-400 hover:scale-95"
                }`}
              >
                <div className=" rounded-xl shadow-md ">
                  <div>
                    <h3 className="my-6 font-sans font-medium m-2">
                      {elem.heading1}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="shadow-2xl bg-yellow-400 rounded-2xl border-blue-600 p-14 h-auto">
            <div className="max-w-screen-md self-start">
              <h3 className="font-bold text-2xl text-center">
                {selectedItemData?.heading1}
              </h3>
              <p className="text-slate-700 whitespace-pre-line">
                {selectedItemData?.text1}
              </p>
              <div>
                <div className="flex flex-col md:flex-row gap-16">
                  <div className="basis-1/2 mt-16">
                    <h3 className="font-bold text-lg mb-2">
                      {selectedItemData?.heading2}
                    </h3>
                    {selectedItemData?.text2 && (
                      <p
                        className="whitespace-pre-line text-lg"
                        dangerouslySetInnerHTML={{
                          __html: selectedItemData?.text2,
                        }}
                      ></p>
                    )}
                  </div>
                  <div className="basis-1/2 mt-16">
                    <h3 className="font-bold mb-2 text-lg">
                      {selectedItemData?.heading3}
                    </h3>
                    <p className="whitespace-pre-line text-lg">
                      {selectedItemData?.text3}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="basis-1/2 mt-16">
                    <h3 className="font-bold mb-2 text-lg">
                      {selectedItemData?.heading4}
                    </h3>
                    <p className="whitespace-pre-line text-lg">
                      {selectedItemData?.text4}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className=" p-2 text-sm md:text-lg lg:text-xl hover:scale-105 bg-yellow-400 rounded-lg font-bold m-4 md:m-6 lg:m-8">
            <Link href="/">Home</Link>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Outline;
