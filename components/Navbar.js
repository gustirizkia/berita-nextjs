import React, { useState, useEffect, useRef } from "react";
import Logo2 from "../public/logo.png";
import Link from "next/link";

export default function Navbar() {
  useEffect(() => {});
  return (
    <>
      {/* :kategori - terbaru, politik, hukum, ekonomi, bola, olahraga, humaniora, lifestyle, hiburan, */}
      <div className="shadow py-4 px-20 flex justify-between bg-white ">
        <div className="my-auto">
          <Link href="/">
            <a>
              <img src={Logo2.src} className="h-10" />
            </a>
          </Link>
        </div>
        <div className="flex">
          <div className="my-auto">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="my-auto mr-8"
            >
              <path
                d="M5.66667 15.5833H14.1667C14.5424 15.5833 14.9027 15.4341 15.1684 15.1684C15.4341 14.9027 15.5833 14.5424 15.5833 14.1667V5.66667C15.5833 5.29094 15.4341 4.93061 15.1684 4.66493C14.9027 4.39926 14.5424 4.25 14.1667 4.25H5.66667C5.29094 4.25 4.93061 4.39926 4.66493 4.66493C4.39926 4.93061 4.25 5.29094 4.25 5.66667V14.1667C4.25 14.5424 4.39926 14.9027 4.66493 15.1684C4.93061 15.4341 5.29094 15.5833 5.66667 15.5833ZM19.8333 15.5833H28.3333C28.7091 15.5833 29.0694 15.4341 29.3351 15.1684C29.6007 14.9027 29.75 14.5424 29.75 14.1667V5.66667C29.75 5.29094 29.6007 4.93061 29.3351 4.66493C29.0694 4.39926 28.7091 4.25 28.3333 4.25H19.8333C19.4576 4.25 19.0973 4.39926 18.8316 4.66493C18.5659 4.93061 18.4167 5.29094 18.4167 5.66667V14.1667C18.4167 14.5424 18.5659 14.9027 18.8316 15.1684C19.0973 15.4341 19.4576 15.5833 19.8333 15.5833ZM5.66667 29.75H14.1667C14.5424 29.75 14.9027 29.6007 15.1684 29.3351C15.4341 29.0694 15.5833 28.7091 15.5833 28.3333V19.8333C15.5833 19.4576 15.4341 19.0973 15.1684 18.8316C14.9027 18.5659 14.5424 18.4167 14.1667 18.4167H5.66667C5.29094 18.4167 4.93061 18.5659 4.66493 18.8316C4.39926 19.0973 4.25 19.4576 4.25 19.8333V28.3333C4.25 28.7091 4.39926 29.0694 4.66493 29.3351C4.93061 29.6007 5.29094 29.75 5.66667 29.75ZM24.0833 29.75C27.2085 29.75 29.75 27.2085 29.75 24.0833C29.75 20.9582 27.2085 18.4167 24.0833 18.4167C20.9582 18.4167 18.4167 20.9582 18.4167 24.0833C18.4167 27.2085 20.9582 29.75 24.0833 29.75Z"
                fill="#005D6C"
              />
            </svg>
          </div>
          <div className="font-semibold text-primary my-auto mr-8 text-lg">
            Terbaru
          </div>
          <div className="font-semibold text-primary my-auto mr-8 text-lg">
            Politik
          </div>
          <div className="font-semibold text-primary my-auto mr-8 text-lg">
            Hukum
          </div>
          <div className="font-semibold text-primary my-auto mr-8 text-lg">
            Ekonomi
          </div>
          <div className="font-semibold text-primary my-auto mr-8 text-lg">
            Olahraga
          </div>
          <div className="bg-primary text-white px-8 py-2 rounded-full ">
            Login
          </div>
        </div>
      </div>
    </>
  );
}
