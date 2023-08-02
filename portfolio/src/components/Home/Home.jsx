import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography, IconButton } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import 'swiper/scss';
import 'swiper/scss/pagination';

import './styles.scss';

import { Keyboard, Mousewheel, Pagination } from 'swiper/modules';

const Home = () => {
  
  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        speed={500}
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
            <Typography variant='h4' sx={{fontFamily: 'Outfit', fontWeight: '300', marginBottom: '30px'}}>Hi, I'm Zoe,<br/> web developer & designer</Typography>
            <Box>
              <Typography variant='body2' sx={{fontFamily: 'Outfit', fontWeight: '300',color: '#777'}}>Scroll down</Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className='slide'>
          <Typography variant='h5' sx={{fontFamily: 'Outfit', marginBottom: '12px', fontWeight: '300'}}>Thanks for visiting my page!</Typography>
          <Typography variant='body2' sx={{fontFamily: 'Outfit', fontWeight: '300',color: '#777', maxWidth: '460px',}}>I am a dedicated designer working as a freelance focusing on digital material design.<br />
          I love to learn new things related to design, and I join many design challenges as a daily practice. My goal is to be a skilled designer who can help ppl solve problems with great ideas.<br />
          Please <a href='/' style={{color: '#333'}}>eMAIL</a> me or find me on LinkedIn! I will be happy to talk with you about design or relevant things.</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className='slide'>
            <Typography variant='h5' sx={{fontFamily: "Gaegu", marginRight: '12px'}}>Find me on:</Typography>
            <Box>
              <IconButton><InstagramIcon /></IconButton>
              <IconButton><LinkedInIcon /></IconButton>
              <IconButton><TwitterIcon /></IconButton>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
    
  )
}

export default Home;