import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Box, Typography } from '@mui/material';

import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/css/scrollbar';

import './styles.scss';

import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';

const ProjectPage = () => {
  return (
    <Box className='project-content-container'>
      <Swiper
        direction={'vertical'}
        slidesPerView={'auto'}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper">
        {/* <button className='cta-back'>Back</button> */}
        <SwiperSlide >
          <Box className='project-content'>
            <Typography variant='caption'>Dec, 2023</Typography>
            <Typography variant='h5' gutterBottom>Sed nulla at cras mattis</Typography>
            <img className='image-1' src='https://images.pexels.com/photos/3137890/pexels-photo-3137890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
            <Typography variant='body2' sx={{fontWeight: '100', textAlign: 'justify'}}>Congue in nulla odio eu porttitor at. Quam pulvinar ipsum iaculis nibh auctor tristique egestas suspendisse mi. Fringilla non vulputate arcu donec nulla enim fermentum scelerisque. Quis pulvinar pharetra bibendum ante amet viverra. Donec in lacus cursus proin.<br/><br/>

              Adipiscing porta sollicitudin risus lorem quam leo sollicitudin libero.
            Vitae aliquet congue morbi arcu augue sit. Pulvinar augue consectetur nec nunc purus neque dolor lacinia. Mauris orci nibh dolor nulla habitant interdum tristique tellus. Commodo iaculis fringilla at sem. In fusce facilisis amet ut turpis urna pretium. Dictum cras sit nulla aliquam elit.<br/><br/>

            Vivamus est enim aliquet ornare duis mi orci. Amet a ut turpis vel ornare massa dignissim lectus ullamcorper. Arcu auctor sit odio mauris eu blandit. Ac velit eros faucibus fames congue sit turpis. Sed morbi amet consequat facilisi purus cursus morbi. <br/><br/>

            Non sagittis aenean enim nulla. Ut accumsan viverra nisl hac purus ultrices eu quis viverra. Nunc sed quis amet nulla urna. Aenean non sapien facilisis elit. Morbi id eu sed ac. Sollicitudin mi facilisis urna vitae elementum faucibus posuere sed. Commodo phasellus neque euismod pellentesque vel. <br/><br/>

            Ut tellus eget congue ac odio cras integer vestibulum. Eget tempor non lectus euismod scelerisque in scelerisque morbi. Lacus elementum diam eu tempus convallis libero in.<br/><br/>
            </Typography>
          </Box>
          
        </SwiperSlide>

      </Swiper>

    </Box>
  )
}

export default ProjectPage;