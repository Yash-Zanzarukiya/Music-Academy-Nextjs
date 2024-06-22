"use client";
import React from "react";
import { Meteors } from "@/components/ui/meteors";

function page() {
  return (
    <div className="min-h-screen pt-48 flex justify-center">
      <div className="flex flex-col max-w-[50%] gap-y-10 items-center">
        <h2 className="text-lg lg:text-7xl font-bold text-center">Contact us</h2>
        <p className=" text-center text-lg w-4/5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt voluptatum excepturi
          voluptates suscipit accusantium fugit repudiandae minus, voluptatibus recusandae dolorem?
        </p>
        <div className="w-full">
          <form className="flex flex-col gap-y-3 justify-center">
            <input
              type="text"
              placeholder="Your email address"
              className=" p-4 outline-none border-none rounded bg-slate-700/50"
            />
            <textarea
              name=""
              id=""
              placeholder="Your message"
              className="w-full outline-none h-48 p-4 rounded bg-slate-700/50 "
            ></textarea>
            <button type="button" className=" self-start bg-green-600 rounded px-4 py-3">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Meteors number={40} />
    </div>
  );
}

export default page;
