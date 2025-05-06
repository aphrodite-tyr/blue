import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import couplePhoto from '../assets/couple-photo.jpg';


function Gallery() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Durasi animasi
      once: false, 
           // Animasi hanya sekali
    });
  }, []);

  return (
    <div className="gallery">
      <h2 data-aos="fade-up" className="text-3xl text-center mb-6">Galeri Foto</h2>
      
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-2">
        <div data-aos="zoom-in" className="overflow-hidden rounded-lg shadow-md">
          <img src={couplePhoto} alt="Image 1" className="w-full h-64 object-cover" />
        </div>
        <div data-aos="fade-right" className="overflow-hidden rounded-lg shadow-md">
          <img src={couplePhoto} alt="Image 2" className="w-full h-64 object-cover" />
        </div>
        <div data-aos="slide-up" className="overflow-hidden rounded-lg shadow-md">
          <img src={couplePhoto} alt="Image 3" className="w-full h-64 object-cover" />
        </div>
        <div data-aos="zoom-in" className="overflow-hidden rounded-lg shadow-md">
          <img src="/path/to/image1.jpg" alt="Image 1" className="w-full h-64 object-cover" />
        </div>
        <div data-aos="fade-right" className="overflow-hidden rounded-lg shadow-md">
          <img src="/path/to/image2.jpg" alt="Image 2" className="w-full h-64 object-cover" />
        </div>
        <div data-aos="slide-up" className="overflow-hidden rounded-lg shadow-md">
          <img src="/path/to/image3.jpg" alt="Image 3" className="w-full h-64 object-cover" />
        </div>
        <div data-aos="zoom-in" className="overflow-hidden rounded-lg shadow-md">
          <img src="/path/to/image1.jpg" alt="Image 1" className="w-full h-64 object-cover" />
        </div>
        <div data-aos="fade-right" className="overflow-hidden rounded-lg shadow-md">
          <img src="/path/to/image2.jpg" alt="Image 2" className="w-full h-64 object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
