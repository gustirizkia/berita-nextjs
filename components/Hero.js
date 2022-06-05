import HeroImg from "../public/image/hero2.png";
import Shape from "../components/Shape";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="md:mx-20 mx-6 mt-8">
        <div className="grid grid-flow-row grid-cols-2 gap-4 ">
          <div className="">
            <div className="text-primary text-7xl font-semibold mt-16">
              BACA, VALIDASI DAN BAGIKAN
            </div>
            <div className="mt-6 text-lg text-gray-700">
              Temukan berita terkini dan terupdate secara gratis dan mudah.
              semua sudah tersajikan dengan satu genggaman
            </div>
            <div className="my-8">
              <div className="bg-primary text-white px-8 py-2 rounded-full inline-block">
                Dapatkan Kelas Gratis
              </div>
              <div className="bg-gray-500 ml-6 text-white px-8 py-2 rounded-full inline-block">
                Dapatkan Kelas Gratis
              </div>
            </div>
          </div>
          <div>
            <Image src={HeroImg} alt="Picture of the author" />
          </div>
        </div>
      </div>

      {/* shape */}
      <Shape />
      {/* endshape */}
    </>
  );
}
