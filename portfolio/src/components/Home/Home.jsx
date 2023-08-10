import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography, IconButton } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';

import './styles.scss';

import { EffectFade, Parallax, Keyboard, Mousewheel, Pagination } from 'swiper/modules';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['Z','o','e'];
  const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r',' ', '&',' ','d','e','s','i','g','n','e','r'];
  const aboutArray = ['A','b','o','u','t',' ','m','e']

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 9000)
  }, []);
  
  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        speed={800}
        parallax={true}
        effect={'fade'}
        keyboard={{
          enabled: true,
        }}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Parallax, Keyboard, Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box className='slide'>
            <Typography className='title-l' variant='h4' sx={{fontFamily: 'Outfit', fontWeight: '300', marginBottom: '20px'}}>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i</span>
              <span className={`${letterClass} _13`}>,</span>
              <span className={`${letterClass} _14`}> </span>
              <span className={`${letterClass} _15`}>I</span>
              <span className={`${letterClass} _16`}>'</span>
              <span className={`${letterClass} _17`}>m</span>
              <span className={`${letterClass} _18`}> </span>
              <AnimatedLetters letterClass={letterClass} 
              strArray={nameArray} index={19}
            /><br/><AnimatedLetters letterClass={letterClass}
              strArray={jobArray} index={22}
            /></Typography>
            <Typography className='sub-title' variant='body2' sx={{fontFamily: 'Outfit', fontWeight: '300',color: '#777'}}>Scroll down</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className='slide'>
            <Box sx={{fontFamily: 'Outfit', fontWeight: '300', justifyContent:'flex-start', textAlign:'left', width:'80%'}}>
              <AnimatedLetters strArray={aboutArray} letterClass={letterClass} index={0}/>
              <Box className='text-content' sx={{marginTop: '8px'}}>
                <p>
                  I am a dedicated designer working as a freelance focusing on digital material design.
                </p>
                <p>
                  I love to learn new things related to design, and I join many design challenges as a daily practice. My goal is to be a skilled designer who can help ppl solve problems with great ideas.
                </p>
                <p>
                  Please <a href='/' style={{color: '#333'}}>eMAIL</a> me or find me on LinkedIn! I will be happy to talk with you about design or relevant things.
                </p>
              </Box>
              <Box sx={{display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems: 'center'}}>
                <Typography variant='body1' sx={{fontFamily: "Gaegu", marginRight: '12px'}}>Find me on: </Typography>
                <IconButton><InstagramIcon /></IconButton>
                <IconButton><LinkedInIcon /></IconButton>
                <IconButton><TwitterIcon /></IconButton>
              </Box>
            </Box>
              
          </Box>

        </SwiperSlide>
        {/* <SwiperSlide>
          <Box className='slide'>
            <Typography variant='h6' sx={{fontFamily: "Gaegu", marginRight: '12px'}}>  Find me on: </Typography>
            <Box>
              <IconButton><InstagramIcon /></IconButton>
              <IconButton><LinkedInIcon /></IconButton>
              <IconButton><TwitterIcon /></IconButton>
            </Box>
          </Box>
        </SwiperSlide> */}
      </Swiper>
    </>
    
  )
}

export default Home;