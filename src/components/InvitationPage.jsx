import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import images from '../assets/image.js';

function InvitationPage() {
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get('to');
  const [decodedName, setDecodedName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    if (guestName) {
      try {
        setDecodedName(decodeURIComponent(guestName));
      } catch {
        setDecodedName(guestName);
      }
    }
  }, [guestName]);

  return (
    <div className="relative min-h-screen flex justify-center xl:justify-start">
      {/* Background untuk layar besar */}
      <div className="hidden xl:block fixed inset-0 -z-10">
        <div
          className="absolute inset-0 bg-no-repeat bg-right bg-cover"
          style={{ backgroundImage: `url(${images.backgroundcover})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Konten utama */}
      <div
        className="w-full min-h-screen shadow-lg bg-fixed bg-cover bg-no-repeat
        max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-[480px] relative overflow-hidden"
        style={{ backgroundImage: `url(${images.background})` }}
      >
        {/* Dekorasi bunga */}
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

        {/* Konten tengah */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <img
            src={images.couple}
            alt="Couple"
            className="w-full max-w-xs mx-auto mb-8"
            data-aos="zoom-in"
            data-aos-duration="1500"
          />
          <h1 className="text-sm font-casual2 text-main2">THE WEDDING OF</h1>
          <h1 className="text-5xl font-bold font-casual text-gradient">Putra & Putri</h1>
          <h1 className="text-sm font-casual2 text-main2">Sabtu, 12 November 2024</h1>
          <p className="text-base mt-4 font-casual2">
            Kepada Yth. <span className="font-bold text-pink">{decodedName}</span>
          </p>
          <button
            onClick={() => navigate('/home')}
            className="btn btn-outline hover:bg-main2 hover:text-white mt-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
              />
            </svg>
            RSVP
          </button>
        </div>
      </div>
    </div>
  );
}

export default InvitationPage;
