import * as React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gallery from '../assets/gallery';

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Gallery2() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className='min-h-screen bg-main2 flex flex-col items-center justify-center text-center p-2'>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 4,
      }}
    >
      <ImageList sx={{ width: '100%', maxWidth: 800, height: 450 }} variant="woven" cols={3} gap={8}>
        {gallery.map((item, index) => (
          <ImageListItem
            key={item.img}
            data-aos="fade-up"
            data-aos-delay={index * 100} // animasi delay bertahap
          >
            <img
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=161&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </div>
  );
}

