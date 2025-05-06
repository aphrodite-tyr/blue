import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Countdown() {
  const targetDate = new Date('2025-04-15T22:00:11').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setIsExpired(true);
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      setIsExpired(false);
      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(updateCountdown());
    const interval = setInterval(() => {
      setTimeLeft(updateCountdown());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="min-h-screen flex flex-col items-center p-4 justify-center bg-gradient-to-br from-blue-900 to-purple-900 font-casual2">
      <div data-aos="fade-up" className="flex flex-col items-center w-full max-w-md sm:max-w-lg">
        {/* Countdown grid - tetap 4 kolom */}
        <div className="grid grid-flow-col gap-2 sm:gap-2 text-center auto-cols-fr mb-6 w-full">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col p-2 sm:p-4 bg-main2 rounded-lg text-neutral-content">
              <div className="flex-1 flex items-center justify-center">
                <span className="countdown text-3xl sm:text-5xl">
                  <span style={{ "--value": value }}></span>
                </span>
              </div>

              <span className="mt-1 text-xs sm:text-sm capitalize">{unit}</span>
            </div>
          ))}
        </div>

        {/* Expired notification */}
        {isExpired && (
          <div className="w-full p-3 border border-pink text-pink rounded-lg text-center animate-bounce text-sm sm:text-base">
            ⏰ Hari Pernikahan
          </div>
        )}

        {/* Info acara */}
        <div className="bg-main2 p-4 sm:p-4 rounded-lg mt-6 text-center shadow-md w-full">
          <p className="font-semibold text-sm sm:text-base">Waktu:</p>
          <p className="text-sm sm:text-base">Pukul 10.00 WIB - Selesai</p>
          
        </div>
      </div>
    </div>
  );
}

export default Countdown;