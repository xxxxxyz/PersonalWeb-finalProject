import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography } from '@mui/material';
import ButtonCustom from '../ButtonCustom/ButtonCustom';
// import AnimatedLetters from '../AnimatedLetters/AnimatedStyles';


import 'swiper/scss';
import 'swiper/scss/pagination';

import './styles.scss';

import { Keyboard, Mousewheel, Pagination } from 'swiper/modules';

const Home = () => {
  // const [letterClass, setLetterClass] = useState('text-animate');
  // const nameArray = ['Z', 'o', 'e'];
  // const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box className='slide'>
            <Typography variant='h4' sx={{fontFamily: 'Outfit', fontWeight: '300', marginBottom: '20px'}}>Hi, I'm Zoe,<br/> web developer & designer</Typography>
            <ButtonCustom />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className='slide'>
          <Typography variant='h5' sx={{fontFamily: 'Outfit', marginBottom: '12px', fontWeight: '300'}}>Thanks for visiting my page!</Typography>
          <Typography variant='body2' sx={{fontFamily: 'Outfit', fontWeight: '100', maxWidth:'480px',lineHeight: '1.6'}}>I am a dedicated designer working as a freelance focusing on digital material design. I am working on an internal used APP as the UI/UX designer, while I am still looking for a similar fixed role as possible.<br />
          I love to learn new things related to design, and I join many design challenges as a daily practice. My goal is to be a skilled designer who can help ppl solve problems with great ideas.<br />
          Please eMAIL me or find me on LinkedIn! I will be happy to talk with you about design or relevant things.</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className='slide'>
            Slide 3
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
    
  )
}

export default Home;