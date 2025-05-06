import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import images from '../assets/image.js';

function Cover() {
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get('to');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 0,
      anchorPlacement: 'top'
    });
  }, []);

  return (
    <div className="relative hero min-h-screen text-pink overflow-hidden" style={{ backgroundImage: `url(${images.background})` }}>
      {/* Background */}
      

      <img
        src={images.flower}
        className="absolute -left-52 -bottom-10 h-auto w-80 mb:-left-10"
        data-aos="fade-up-right"
        data-aos-duration="2000"
      />

<img
        src={images.flower}
        className="absolute -left-52 bottom-52 h-auto w-80 mb:-left-10"
        data-aos="fade-up-right"
        data-aos-duration="2000"
      />

      <img
        src={images.flower2}
        className="absolute -top-10 -right-36 h-auto w-60"
        data-aos="fade-down-left"
        data-aos-duration="1000"
      />

<img
        src={images.flower2}
        className="absolute top-52 -right-36 h-auto w-60"
        data-aos="fade-down-left"
        data-aos-duration="1000"
      />

<img
        src={images.flower3}
        className="absolute -bottom-24 h-auto w-max md:-bottom-32"
        data-aos="fade-up"
        data-aos-duration="1000"
      />

<img
        src={images.flower4}
        className="absolute -top-32 h-auto w-max md:-top-40"
        data-aos="fade-down"
        data-aos-duration="1000"
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
            <img src={images.couple} className="w-auto h-auto scale-[1] lg:scale-[1] lg:mb-4 mx-auto mb-20" />
            <h1 className='text-sm font-casual2 p-6'> THE WEDDING OF </h1>
            <h1 className="text-5xl font-bold font-casual">
              Putra &  Putri
            </h1>
            <h1 className='text-sm font-casual2'> Sabtu, 12 November 2024 </h1>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Cover;
