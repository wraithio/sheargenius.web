'use client'
import React, { useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import CreateAccPopup from "@/components/RegisterForm";
import PostCard from "@/components/PostCard";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <div className="bg-white min-h-screen w-full">
      <Navbar setSearchActive={setSearchActive} />
      <header id="page-header">
        <Header searchActive={searchActive} setSearchActive={setSearchActive} />
      </header>
      <section id="top-posts" className="mt-20 mx-5">
        <div className="flex justify-center">
          <p className="font-[NeueMontreal-Medium] text-xl"> Top Posts </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-3 grid-rows-2 gap-3">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
          <div className="mt-10">
            <button className="bg-black w-full text-white font-[NeueMontreal-Medium] py-5 rounded-lg hover:bg-gray-200 hover:outline-2 hover:text-black active:bg-black active:text-white active:outline-0 cursor-pointer transition-all duration-75">
              VIEW ALL POSTS
            </button>
          </div>
        </div>
        <div id="local-barbers" className="mt-24">
          <div className="flex flex-col justify-center items-center">
            <p className="font-[NeueMontreal-Medium] text-xl"> Local Barbers </p>
            <p className="font-[NeueMontreal-Medium] text-sm">
              Curated by the community, for the community
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-3 gap-3">
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
            </div>
          </div>
        </div>
      </section>
      <section id="create-account" className="mt-44">
        <CreateAccPopup />
      </section>
      <section className="mt-25 px-5">
        <div className="grid grid-cols-2 grid-rows-2 gap-3">
          <div id="barber-essentials" className="relative col-span-2">
            <img
              className="w-full h-[600px] object-cover"
              src="./barberessentials.png"
              alt="Barber Essentials Background Image"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <img
                className="w-[50px]"
                src="./icons/sheargenius-essentials.svg"
                alt="ShearGenius Logo"
              />
              <div className="flex justify-center flex-col items-center mb-10 mt-5">
                <p className="font-[NeueMontreal-Medium] text-white text-5xl">
                  Barber Essentials
                </p>
                <p className="font-[NeueMontreal-Medium] text-white text-sm">
                  Create the best toolbox for success
                </p>
              </div>
              <button className="font-[NeueMontreal-Medium] text-black bg-white px-25 py-2 hover:bg-[#FFFFFF1A] hover:outline-2 hover:outline-white hover:text-white active:text-black active:bg-white active:outline-0 cursor-pointer transition-all duration-75">
                EXPLORE
              </button>
            </div>
          </div>
          <div id="barber-etiquette" className="relative">
            <img
              className="w-full h-[600px] object-cover"
              src="./barberetiquette.jpg"
              alt="Barber Shop Cutting Area Background"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-7">
              <div className="flex justify-center flex-col items-center text-center gap-1">
                <p className="font-[NeueMontreal-Medium] text-white text-5xl">
                  Barber Shop <br /> Etiquette
                </p>
                <p className="font-[NeueMontreal-Medium] text-white text-sm">
                  Make your next visit a breeze
                </p>
              </div>
              <button className="font-[NeueMontreal-Medium] text-black bg-white px-25 py-2 hover:bg-[#FFFFFF1A] hover:outline-2 hover:outline-white hover:text-white active:text-black active:bg-white active:outline-0 cursor-pointer transition-all duration-75">
                LEARN MORE
              </button>
            </div>
          </div>
          <div id="clippers-crash-course" className="relative">
            <img
              className="w-full h-[600px] object-cover"
              src="./barberitems.jpg"
              alt="Barber Clippers and Items Background"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-7">
              <div className="flex justify-center flex-col items-center text-center gap-1">
                <p className="font-[NeueMontreal-Medium] text-white text-5xl">
                  Clippers <br /> Crash Course
                </p>
                <p className="font-[NeueMontreal-Medium] text-white text-sm">
                  Learn basic terminology
                </p>
              </div>
              <button className="font-[NeueMontreal-Medium] text-black bg-white px-25 py-2 hover:bg-[#FFFFFF1A] hover:outline-2 hover:outline-white hover:text-white active:text-black active:bg-white active:outline-0 cursor-pointer transition-all duration-75">
                BEGIN
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer className="mt-25">
        <Footer />
      </footer>
    </div>
  );
}
