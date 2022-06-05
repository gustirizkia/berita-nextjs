import Hero from "../components/Hero";
import Layout from "../components/Layout";
import TesterKelas from "../public/image/tester-kelas.jpg";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Shape3 from "../public/image/shape/3.svg";
import Shape4 from "../public/image/shape/4.png";
import axios from "axios";
import moment from "moment";

export default function Home() {
  const [top, setTop] = useState([]);
  const [politik, setPolitik] = useState([]);
  const [ekonomi, setEkonomi] = useState([]);
  const API = process.env.NEWS_API;

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    const response = await axios
      .get(`https://api-berita-indonesia.vercel.app/antara/terbaru`)
      .then((res) => {
        setTop(res.data.data.posts);
      });
    const politik = await axios
      .get(`https://api-berita-indonesia.vercel.app/antara/politik`)
      .then((res) => {
        setPolitik(res.data.data.posts);
      });
    const fetctEkonomi = await axios
      .get(`https://api-berita-indonesia.vercel.app/antara/ekonomi`)
      .then((res) => {
        console.log("data : ", res.data.data.posts);
        setEkonomi(res.data.data.posts);
        console.log("ekonomi", ekonomi);
      });
  };

  return (
    <>
      <Layout>
        <Hero />
        <div className="relative">
          <div className="mt-20 ">
            <div className="text-center text-3xl font-semibold text-primary">
              Terbaru
            </div>
          </div>

          <div className="mb-20 mt-10 px-20">
            <div className="grid grid-flow-row grid-cols-12 gap-6 mb-10">
              {top.slice(0, 8).map((item, index) => {
                return (
                  <div key={index} className="col-span-3">
                    <Link href={item.link}>
                      <a>
                        <div className="card rounded-xl shadow-md relative p-6 bg-white">
                          <img
                            src={item.thumbnail}
                            className="w-full rounded-2xl h-32 object-cover"
                            layout="fill"
                          />
                          <div className="  rounded-b-lg mt-6">
                            <div className="text-gray-700 font-semibold text-lg">
                              {item.title.length > 50
                                ? `${item.title.substring(0, 50)} ...`
                                : item.title}
                            </div>
                            <div className="mt-10 text-gray-500">
                              {moment(item.pubDate).format("D, MMM y")}
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="text-center">
              <div className="bg-primary text-white px-8 py-2 rounded-full inline mt-24 text-center cursor-pointer  ">
                Lebih banyak
              </div>
            </div>
          </div>
          {/* sphape */}
          <div className="absolute top-0 -z-10">
            <Image src={Shape3} className="" />
          </div>
          <div className="absolute top-56 -z-10 right-0">
            <Image src={Shape4} className="" />
          </div>
          {/* end shape */}
        </div>

        <div className="grid grid-flow-row grid-cols-12 px-20 gap-4">
          <div className="col-span-6">
            {/* iklan */}
            <div className="">
              <img
                src="https://storage.nu.or.id/storage/banners/unu_1646726969.webp"
                className="rounded"
              />
            </div>
            {/* iklan */}
            <div className="grid grid-flow-row grid-cols-12 gap-4 mt-3">
              {ekonomi.slice(0, 6).map((item, index) => {
                return (
                  <div className="col-span-6">
                    <Link href={item.link}>
                      <a>
                        <div>
                          <img
                            src={item.thumbnail}
                            className="rounded h-32 w-full object-cover"
                          />
                        </div>
                        {item.title}
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-6">
            <div className="bg-gradient-to-r from-green-900 to-green-600 text-white py-2 rounded-full px-6 font-semibold">
              Berita Politik
            </div>
            <div className="px-6">
              {politik.slice(0, 15).map((item, index) => {
                return (
                  <>
                    <div className="font-medium text-lg my-2 text-gray-700">
                      {item.title}
                    </div>
                    <hr />
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="mt-20 ">
            <div className="text-center text-3xl font-semibold text-primary">
              Politik
            </div>
          </div>

          <div className="mb-20 mt-10 px-20">
            <div className="grid grid-flow-row grid-cols-12 gap-6 mb-10">
              {politik.slice(0, 4).map((item, index) => {
                return (
                  <div key={index} className="col-span-3">
                    <Link href={item.link}>
                      <a>
                        <div className="card rounded-xl shadow-md relative p-6 bg-white">
                          <img
                            src={item.thumbnail}
                            className="w-full rounded-2xl h-32 object-cover"
                            layout="fill"
                          />
                          <div className="  rounded-b-lg mt-6">
                            <div className="text-gray-700 font-semibold text-lg">
                              {item.title.length > 50
                                ? `${item.title.substring(0, 50)} ...`
                                : item.title}
                            </div>
                            <div className="mt-10 text-gray-500">
                              {moment(item.pubDate).format("D, MMM y")}
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="text-center">
              <div className="bg-primary text-white px-8 py-2 rounded-full inline mt-24 text-center cursor-pointer  ">
                Lebih banyak
              </div>
            </div>
          </div>
          {/* sphape */}
          <div className="absolute top-0 -z-10">
            <Image src={Shape3} className="" />
          </div>
          <div className="absolute top-56 -z-10 right-0">
            <Image src={Shape4} className="" />
          </div>
          {/* end shape */}
        </div>
      </Layout>
    </>
  );
}
