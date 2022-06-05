import Layout from "../components/Layout";
import Shape from "../components/Shape";
import Head from "next/head";
import ReactPlayer from "react-player";

export default function Detial() {
  return (
    <>
      <Head>
        <title>Detail Kelas</title>
      </Head>
      <Layout>
        <Shape />

        <div className="md:px-20 mt-10">
          <div className="grid grid-flow-row grid-cols-12 gap-4">
            <div className="bg-white col-span-8 shadow-md rounded-lg h-96">
              <div>
                {/* <ReactPlayer
                  url="https://www.youtube.com/watch?v=wWgIAphfn2U"
                  className="w-full h-full"
                  width="100%"
                /> */}

                <video
                  autoPlay
                  loop
                  style={{ width: "500px", height: "500px" }}
                >
                  <source src="https://www.youtube.com/watch?v=wWgIAphfn2U" />
                </video>
              </div>
            </div>

            <div className=" col-span-4">
              <div className="bg-white p-6  shadow-md rounded-lg">
                <div className="bg-primary rounded-full py-2 px-4 text-white flex cursor-pointer hover:bg-green-700">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 2.5C24.6413 2.5 29.0925 4.34374 32.3744 7.62563C35.6563 10.9075 37.5 15.3587 37.5 20C37.5 24.6413 35.6563 29.0925 32.3744 32.3744C29.0925 35.6563 24.6413 37.5 20 37.5C15.3587 37.5 10.9075 35.6563 7.62563 32.3744C4.34374 29.0925 2.5 24.6413 2.5 20C2.5 15.3587 4.34374 10.9075 7.62563 7.62563C10.9075 4.34374 15.3587 2.5 20 2.5ZM20 35C23.9782 35 27.7936 33.4196 30.6066 30.6066C33.4196 27.7936 35 23.9782 35 20C35 16.0218 33.4196 12.2064 30.6066 9.3934C27.7936 6.58035 23.9782 5 20 5C16.0218 5 12.2064 6.58035 9.3934 9.3934C6.58035 12.2064 5 16.0218 5 20C5 23.9782 6.58035 27.7936 9.3934 30.6066C12.2064 33.4196 16.0218 35 20 35ZM18.125 25.3275L26.1175 20L18.125 14.6725V25.3275ZM18.54 11.9425L28.285 18.44C28.5418 18.6112 28.7523 18.8432 28.898 19.1153C29.0436 19.3875 29.1198 19.6914 29.1198 20C29.1198 20.3086 29.0436 20.6125 28.898 20.8847C28.7523 21.1568 28.5418 21.3888 28.285 21.56L18.54 28.0575C18.2576 28.2457 17.9295 28.3538 17.5905 28.3702C17.2515 28.3866 16.9145 28.3106 16.6153 28.1505C16.3161 27.9904 16.066 27.7521 15.8916 27.461C15.7171 27.1698 15.625 26.8369 15.625 26.4975V13.5C15.625 13.1606 15.7171 12.8277 15.8916 12.5365C16.066 12.2454 16.3161 12.0071 16.6153 11.847C16.9145 11.6869 17.2515 11.6109 17.5905 11.6273C17.9295 11.6437 18.2576 11.7518 18.54 11.94V11.9425Z"
                      fill="white"
                    />
                  </svg>
                  <div className="my-auto text-lg ml-4">Pendahuluan</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:px-20 mt-10">
          <div className="grid grid-flow-row grid-cols-12 gap-4">
            <div className="col-span-8">
              <div className="my-6 font-semibold text-xl text-gray-700">
                Develop Your Skills
              </div>
              <div className="text-gray-700">
                Kontrak kerja adalah hal paling penting dibuat sebelum memulai
                bekerja sebagai Freelancer. Di kelas ini akan kita bahas dari
                awal tentang bagaimana caranya membuat kontrak kerja agar kita
                bisa bekerja lebih nyaman, mendapatkan bayaran pasti, dan juga
                professional. Tool yang kita gunakan adalah HelloBonsai yaitu
                salah satu website favorite yang sering saya gunakan untuk
                bekerja sebagai Freelancer. Website tersebut dapat membantu saya
                dalam membuat invoice, tracking work hourse, dan juga masih
                banyak lainnya.
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
