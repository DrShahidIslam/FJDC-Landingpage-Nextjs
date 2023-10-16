"use client";
import Image from "next/image";
import { useState } from "react";
import fjdc from "../../../public/fjdc.jpg";
import appication from "../../../public/applications.jpg";
import Link from "next/link";
import qasim from "../../../public/qasim.jpg";
import zia from "../../../public/zia.jpg";
import { programsData } from "../Components/programsdata";
import Sidebar from "../Components/sidebar";
import Navigation from "../Components/Navigation";
import Navbar from "../Components/Sidebar-pages";
import Footer from "../Components/Footer";

const Outline = () => {
  const [selectedItem, setSelectedItem] = useState("web");
  const selectedItemData = programsData.find(
    (item) => item.id === selectedItem
  );

  return (
    <section className="relative z-0" style={{height: '100vh'}}>
          <img 
            src={fjdc.src} // Path to your image
            alt="fjdc"
            style={{
              objectFit: 'cover', 
              objectPosition: 'center', 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%'
            }}
          />
          
          <div className="absolute inset-0 bg-white opacity-80 z-10" style={{position: 'fixed'}}></div>
          <div className="m-3 relative z-30"><Navbar /></div>
          <h1 className="mx-3 p-2 md:mb-20 mb-10 text-xl md:text-4xl font-extrabold text-center xl:mx-28 rounded-xl md:p-2 lg:p-3 " style={{position: 'relative', zIndex: 20}}>
    {" "}
    Certified Generative AI Healthcare and Medicine Specialization
  </h1>
      <div className="flex lg:flex-row flex-col items-center md:items-stretch my-4 z-10 relative ">
      <div><Navigation/></div>
        
        <div>
            
        <p className="text-center m-2 md:mx-20 rounded-xl mx-3 font-light lg:my-2 md:my-4 my-24 p-3 text-md md:text-xl bg-gray-800 text-white">
          Generative AI in healthcare refers to the application of generative
          artificial intelligence techniques and models in various aspects of
          the healthcare industry. It involves using machine learning algorithms
          to generate new and original content that is relevant to healthcare,
          such as medical images, personalized treatment plans, and more.
        </p>
        <h2 id="designers" className="text-center mt-20 p-2 my-10 lg:my-20 text-2xl lg:text-4xl 2xl:text-4xl md:mx-24 mx-12 lg:mx-24 2xl:mx-16 rounded-xl md:p-2 lg:p-3 font-bold">
          Applications of AI in Healthcare and Medicine
        </h2>
        <div id="uses" className="flex object-center max-w-screen-lg shadow-lg mx-3 md:my-16 xl:mx-36 2xl:mx-68 md:mx-4 ">
          <Image src={appication} alt="ai in healthcare"></Image>
        </div>
        <div id="details" className="flex flex-col bg-gray-800 text-white rounded-2xl justify-center text-center m-3 p-2 my-32">
          <h2 className="md:text-4xl text-2xl my-6 font-semibold border-white border-b-2">
            Course Fees and Duration
          </h2>
          <p className="flex flex-col text-lg gap-4 p-2 my-6">
            <b>Duration:</b> 6 Months (Two Quarters)
            <b>Fees:</b> Rs 6000 per Quarter and Rs 1000 registration Fees
            <b>Schedule:</b> Classes on Saturdays only, so that every one can attend
          </p>

        </div>
        <h2 id="designers" className="text-center my-12 p-2 lg:my-20 text-2xl lg:text-4xl 2xl:text-4xl md:mx-52 mx-12 lg:mx-40 2xl:mx-80 rounded-xl md:p-2 lg:p-3 font-bold">
          The Program Designers
        </h2>
          <div className="flex flex-col md:flex-row justify-center my-6 lg:my-24 mx-3 space-y-6 md:space-x-6 md:space-y-0">
          <div className="flex flex-col p-5 bg-white items-center gap-2 justify-center rounded-xl text-center xl:flex-row shadow-lg">
            <Image
              className="mx-2 xl:w-60 lg:w-66 w-auto h-60 md:h-72 my-4 md:w-auto"
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
          <div className="flex flex-col text-center items-center gap-2 bg-white xl:flex-row rounded-xl p-5 justify-center shadow-lg">
            <Image
              className="mx-2 xl:w-60 lg:w-66 w-auto my-4 h-60 md:h-72 md:w-60"
              src={qasim}
              alt={"fjdc"}
              width={200}
              height={150}
            ></Image>
            👨‍💼 Mr. Muhammad Qasim brings a
            wealth of knowledge and expertise to our course as the Chief Data
            Scientist at Cancer Clarity LLC in New York, USA. With a strong
            foundation in Data Science, a prestigious Data Analytics
            certification, and a decade of experience in web software
            development, he is well-equipped to guide you through the
            intricacies of AI and Data Science. 🎓 Education: Master&apos;s Degrees in Data Science 📊
            Certification: Data Analytics Certified by ICAEW 📅 Experience: Over
            10 Years in Web Software Development 🌟 Specialization: Artificial
            Intelligence (AI) and Data Science 
          </div>
        </div>
        <h2 id="outline" className="text-center my-16 mx-20 p-2 lg:my-24 text-3xl md:mx-60 md:p-2 lg:text-4xl 2xl:text-4xl lg:mx-60 2xl:mx-96 rounded-xl lg:p-3 font-bold">
          Course Outline
        </h2>
        <div className="mt-6 md:flex md:flex-row gap-x-2 gap-y-6 mb-10">
          <div className="basis-2/12 mx-2">
            {programsData.map((elem) => (
              <div
                key={elem.id}
                onClick={() => setSelectedItem(elem.id)}
                className={`rounded-xl my-6 shadow-lg flex mx-4 text-center items-start cursor-pointer ${
                  selectedItem === elem.id
                    ? "bg-gray-800 text-white"
                    : "bg-white hover:scale-95"
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
          <div className="shadow-2xl bg-yellow-400 mx-3 rounded-2xl border-blue-600 p-10 h-auto">
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
          <button className=" p-3 text-sm md:text-lg lg:text-xl hover:scale-105 text-white bg-gray-800 rounded-xl font-bold m-4 md:m-6 lg:m-8">
            <Link href="/">Home</Link>
          </button>
        </div></div>
      </div> 
    </section>

  );
};
export default Outline;
