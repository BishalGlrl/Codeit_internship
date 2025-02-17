import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import './Home.css';

export default function Home() {
  const navigate = useNavigate();
  const handleclk = () => {
    navigate("/fileuploadpage");
  };
  return (
    <>
    <div className="maing h-screen">
      <nav className="bg-slate-100 shadow-md w-full h-[70px] flex justify-between items-center px-4 text-slate-800">
        <div className="md:ml-2 ">
          <img className="h-12 w-18 " src="./bb.jpg" alt="" />
        </div>
        <div>
          <ul className="md:flex space-x-6  hidden font-bold text-xl cursor-pointer">
            <li>
              <a className=" hover:text-red-700" href="/home">
                Home
              </a>
            </li>
            <li>
              <a className=" hover:text-red-700" href="/about">
                About Us
              </a>
            </li>
            <li>
              <a className=" hover:text-red-700" href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-green-900 hidden md:block hover:bg-sky-600 p-2 text-white rounded-md">
          <a href="/signup">Login/Signup</a>
        </div>
        <div className="md:hidden">
          <a className="text-5xl" href="/login">
            &#8801;
          </a>
        </div>
      </nav>
      <div className="content mt-16 mb-12 mx-2">
        <header className="md:flex  md:mx-24 shadow-xl shadow-slate-300">
          <div className="md:hidden sm:block">
            <img
              className="h-[500px] "
              src="./logooo.png"
              alt="Error Loading"
            />
          </div>
          <div className="md:ml-[80px] py-2 text-2xl">
            <motion.h1 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, type: 'spring', stiffness: 15 }} className="md:mt-[46px] ml-4 font-bold">
              <span className="text-orange-800">CodeIT:</span> Where
              Innovation Meets Opportunity – Join Us and Code Your Future!
            </motion.h1>
            <h1 className="ml-4 mt-6">
              <span className="text-orange-800">Instructions:</span>
            </h1>
            <ul className="ml-4 text-xl">
              <li className=" md:mt-3 md:ml-2">1. Multiple Choice Questions</li>
              <li className="list-disc mt-2 md:ml-12 ml-6">
                Answer 5 multiple-choice questions within 40s.
              </li>
              <li className="mt-2 md:ml-2">2. Coding Challenges</li>
              <li className="list-disc mt-2 md:ml-12  ml-6">
                Solve coding challenges using the provided code editor.
              </li>
              {/* <li className="list-disc md:ml-12">Tasks may include writing functions or solving problems in [insert programming language or subject here].</li> */}
              <li className="mt-2 md:ml-2">3. Submissions</li>
              <li className="list-disc mt-2 md:ml-12  ml-6">
                Submit your answers and code.
              </li>
            </ul>
            <div className="bg-red-900 hover:bg-green-900 text-white w-32 p-2 rounded-xl items-baseline m-4 md:mt-12 md:mb-10">
              <button className="text-lg flex items-center" onClick={handleclk}>Tap to Begin</button>
            </div>
          </div>
          <div className="hidden md:block mt-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <img
                className="h-[400px] w-[700px]"
                src="./code.jpg"
                alt="Error Loading"
              />
            </motion.div>
          </div>
        </header>
      </div>
      <div class="animation h-auto py-12 w-full px-4 bg-indigo-50 shadow-xl flex justify-center">
  <div class="scrolling-wrapper w-full">
    <div class="scrolling-content">
      <div class="p-6 mx-4 bg-white rounded-md flex items-center h-28 shadow-lg space-x-5">
        <div>
          <img class="h-10 w-[50px]" src="./tailwind.jpeg" alt="Tailwind CSS"/>
        </div>
        <div class="font-medium text-xl">
          <h1>Tailwind CSS</h1>
          <p class="text-slate-500">By Rojesh Chudal</p>
        </div>
      </div>
      <div class="p-6 mx-4 bg-white rounded-md flex items-center h-28 shadow-lg space-x-5">
        <div>
          <img class="h-14 w-[72px]" src="./nuxt.png" alt="Nuxt js"/>
        </div>
        <div class="font-medium text-xl">
          <h1>Nuxt js</h1>
          <p class="text-slate-500">By Rojesh Chudal</p>
        </div>
      </div>
      <div class="p-6 mx-4 bg-white rounded-md flex items-center h-28 shadow-lg space-x-5">
        <div>
          <img class="h-14 w-[72px]" src="./node.png" alt="Node js"/>
        </div>
        <div class="font-medium text-xl">
          <h1>Node js</h1>
          <p class="text-slate-500">By Rojesh Chudal</p>
        </div>
      </div>
      <div class="p-6 mx-4 bg-white rounded-md flex items-center h-28 shadow-lg space-x-5">
        <div>
          <img class="h-14 w-[72px]" src="./flutter.jpeg" alt="Flutter"/>
        </div>
        <div class="font-medium text-xl">
          <h1>Flutter</h1>
          <p class="text-slate-500">By Rojesh Chudal</p>
        </div>
      </div>
      <div class="p-6 mx-4 bg-white rounded-md flex items-center h-28 shadow-lg space-x-5">
        <div>
          <img class="h-10 w-[50px]" src="./tailwind.jpeg" alt="Tailwind CSS"/>
        </div>
        <div class="font-medium text-xl">
          <h1>Tailwind CSS</h1>
          <p class="text-slate-500">By Rojesh Chudal</p>
        </div>
      </div>
      <div class="p-6 mx-4 bg-white rounded-md flex items-center h-28 shadow-lg space-x-5">
        <div>
          <img class="h-14 w-[72px]" src="./nuxt.png" alt="Nuxt js"/>
        </div>
        <div class="font-medium text-xl">
          <h1>Nuxt js</h1>
          <p class="text-slate-500">By Rojesh Chudal</p>
        </div>
      </div>
      <div class="p-6 mx-4 bg-white rounded-md flex items-center h-28 shadow-lg space-x-5">
        <div>
          <img class="h-14 w-[72px]" src="./node.png" alt="Node js"/>
        </div>
        <div class="font-medium text-xl">
          <h1>Node js</h1>
          <p class="text-slate-500">By Rojesh Chudal</p>
        </div>
      </div>
      <div class="p-6 mx-4 bg-white rounded-md flex items-center h-28 shadow-lg space-x-5">
        <div>
          <img class="h-14 w-[72px]" src="./flutter.jpeg" alt="Flutter"/>
        </div>
        <div class="font-medium text-xl">
          <h1>Flutter</h1>
          <p class="text-slate-500">By Rojesh Chudal</p>
        </div>
      </div>
    </div>
  </div>
</div>

      <footer className="p-2 md:px-8 text-white flex flex-col pb-12 bg-green-950 w-full h-auto pt-8 md:flex-row flex-wrap md:justify-between md:mt-32 relative">
        {/* <div className="absolute top-0 left-0 w-[100%] overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill relative block "></path>
  </svg>
        </div> */}
        <div className="flex flex-col md:items-center mb-8">
          <img className="h-18 w-28" src="./bb.jpg" alt="" />
          <p className="text-xl font-semibold">info@codeit.com.np</p>
        </div>
        <div className="flex flex-col md:items-center">
          <h2 className="text-2xl font-bold">Quick Links</h2>
          <div className="border-b-2 w-24 h-1 border-yellow-800"></div>
          <div className="mt-3 text-gray-200 flex flex-col md:items-center flex-wrap font-medium">
            <p>
              <a href="/home">Home</a>
            </p>
            <p>
              <a href="/about">About Us</a>
            </p>
            <p>
              <a href="/contact">Contact Us</a>
            </p>
          </div>
        </div>
        <div className="flex flex-col md:items-center">
          <h2 className="text-2xl font-bold">Account Details:</h2>
          <div className="border-b-2 w-32 h-1 border-yellow-800"></div>
          <div className="mt-3 flex flex-col md:items-center flex-wrap text-gray-200 font-medium">
            <p>Bank: Nepal Bank Limited</p>
            <p>Account Name: CODE IT</p>
            <p>Ac/No.: 01600106885462000001</p>
            <p>Branch: Dharan</p>
          </div>
        </div>
        <div className="flex flex-col md:items-center">
          <h2 className="text-2xl font-bold">Download App</h2>
          <div className="border-b-2 w-32 h-1 border-yellow-800"></div>
          <div className="mt-3 flex flex-col md:items-center flex-wrap text-gray-200 font-medium">
            <p>Download our mobile app.</p>
            <p>New version coming soon...</p>
          </div>
        </div>
      </footer>
      <hr/>
      <div className="bg-green-950 text-white">
        <h2 className="text-center font-bold text-md pb-4 pt-4">
          &copy; CodeIt. All Rights Reserved
        </h2>
      </div>
    </div>
    </>
  );
}
