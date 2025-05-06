import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaInstagramSquare } from "react-icons/fa";
import images from '../assets/image.js';

function Cover() {
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get('to');
  const [decodedName, setDecodedName] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative hero min-h-screen text-pink overflow-hidden">
      {/* Background */}

            <img
              src={images.flower}
              className="absolute -left-52 bottom-0 h-auto w-80 mb:-left-10"
              data-aos="fade-up-right"
              data-aos-duration="2000"
            />
      
      <img
              src={images.flower}
              className="absolute -left-52 -top-20 h-auto w-80 mb:-left-10"
              data-aos="fade-up-right"
              data-aos-duration="2000"
            />
      
            <img
              src={images.flower2}
              className="absolute -top-10 -right-36 h-auto w-60"
              data-aos="fade-up-left"
              data-aos-duration="1000"
            />
      
      <img
              src={images.flower2}
              className="absolute top-52 -right-36 h-auto w-60"
              data-aos="fade-up-left"
              data-aos-duration="1000"
            />
      

      <img
        src={images.flower4}
        className="absolute -top-40 w-auto h-60 md:h-60"
        data-aos="fade-down"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      />


      {/* Konten utama */}
      <div className='m-4'>
      <div
        className="hero-content text-center z-20"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <div className="max-w-md bg-opacity-80">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <img src={images.women} className="w-auto h-auto scale-[1] lg:scale-[0.8] lg:mb-4 mx-auto mb-20" />
            <h1 className="text-5xl font-bold font-casual">
              Putra &  Putri
            </h1>
            <h1 className='text-sm font-casual2'> Anak dari Bapak/Ibu </h1>
            <a
              href="https://instagram.com/namakamu" // Ganti dengan username kamu
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex pt-2 justify-center items-center text-4xl text-pink hover:text-main2 transition duration-300">
                <FaInstagramSquare />
              </div>
            </a>

            <img src={images.women} className="w-auto h-auto scale-[1] lg:scale-[0.8] lg:mb-4 mx-auto mb-20" />
            <h1 className="text-5xl font-bold font-casual">
              Putra &  Putri
            </h1>
            <h1 className='text-sm font-casual2'> Anak dari Bapak/Ibu </h1>
            <a
              href="https://instagram.com/namakamu" // Ganti dengan username kamu
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex pt-2 justify-center items-center text-4xl text-pink hover:text-main2 transition duration-300">
                <FaInstagramSquare />
              </div>
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Cover;
