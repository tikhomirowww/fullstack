import React from 'react';
import { Button } from '@mui/material';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import { display } from '@mui/system';
import { Padding } from '@mui/icons-material';
import { fontSize } from '@mui/joy/styles/styleFunctionSx';


const links = ["https://goodereader.com/blog/uploads/images/istock-584503712-1024x683.jpg", "https://i0.wp.com/about.ebooks.com/wp-content/uploads/2019/07/Reading-an-Ebook-shutterstock_664739923.jpg?resize=696%2C519&ssl=1", "https://cdn.geekwire.com/wp-content/uploads/2018/05/bigstock-Girl-Is-Reading-Ebook-On-Digit-229068445-630x421.jpg"];
const delay = 5000;

const HomePage = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === links.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  //carousel

  const data = [
    {
      src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
      title: 'Night view',
      description: '4.21M views',
    },
    {
      src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
      title: 'Lake view',
      description: '4.74M views',
    },
    {
      src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
      title: 'Mountain view',
      description: '3.98M views',
    },
    {
      src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
      title: 'Night view',
      description: '4.21M views',
    },
    {
      src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
      title: 'Lake view',
      description: '4.74M views',
    },
    {
      src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
      title: 'Night view',
      description: '4.21M views',
    },
    {
      src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
      title: 'Lake view',
      description: '4.74M views',
    },
    {
      src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
      title: 'Mountain view',
      description: '3.98M views',
    },
    {
      src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
      title: 'Night view',
      description: '4.21M views',
    },
    {
      src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
      title: 'Lake view',
      description: '4.74M views',
    },
    {
      src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
      title: 'Night view',
      description: '4.21M views',
    },
    {
      src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
      title: 'Lake view',
      description: '4.74M views',
    },
    {
      src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
      title: 'Night view',
      description: '4.21M views',
    },
    {
      src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
      title: 'Lake view',
      description: '4.74M views',
    },
    {
      src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
      title: 'Mountain view',
      description: '3.98M views',
    },
    {
      src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
      title: 'Night view',
      description: '4.21M views',
    },
    {
      src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
      title: 'Lake view',
      description: '4.74M views',
    },
  ];
  

  return (
    <div style={{displey: 'flex', flexDirection: 'column' }}>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh', background: 'rgb(211, 217, 238, .3)', color: '#f0c33b', fontSize: '23px', width: '70%', borderRadius: '20px', margin: ''}}className="center">
      <h1>Your Guide To The World Of Knowledge</h1>
    </div>
    <div style={{display: 'flex', justifyContent: "space-around", alignItems: 'center', height: '50vh' }}>
      <div className="leftBlock"  style={{color: '#eb056a', fontSize: '20px'}}>
        <h2>Just Download The Applications And <br/> Together We Will Open New Horizons</h2>
        <div style={{fontSize: '100px'}}>
        <a href="#"> <img src="https://maratapiev.github.io/projectgid/img/Badges%20RUSSIAN%20(1).png" alt="" /></a>
        <a href="#"> <img src="https://maratapiev.github.io/projectgid/img/Badges%20RUSSIAN.png" alt="" /></a>
        </div>
      </div>
      <div className='rightBlock' style={{color: '#f0c33b'}}>
        <div className='title'>
        <h2 style={{textAlign: 'center', fontSize: '30px'}}>Read What Ever You Want <br/>
        Where Ever You Want!</h2>
        </div>
        <div className="slideshow" style={{borderRadius: '30px', paddingTop: '10px'}}>
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)`, borderRadius: '20%' }}
        >
          {links.map((link, index) => (
            <img src={link}
              className="slide"
              key={index}
              // style={{ link }}
            ></img>
          ))}
        </div>
      </div>
    </div>
    </div>
    <div style={{display: 'flex', justifyContent: 'center', paddingTop: '30px'}}>
    <Box
      sx={{
        background: '#f0c33b',
        borderRadius: '20px',
        background: '#f0c33b',
        borderRadius: '20px',
        display: 'flex',
        gap: 1,
        py: 1,
        overflow: 'auto',
        width: 700,
        scrollSnapType: 'x mandatory',
        '& > *': {
          scrollSnapAlign: 'center',
        },
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {data.map((item) => (
        <Card
          row
          key={item.title}
          variant="outlined"
          sx={{
            gap: 2,
            '--Card-padding': (theme) => theme.spacing(2),
          }}
        >
          <AspectRatio
            ratio="1"
            sx={{ minWidth: 60, borderRadius: 'sm', overflow: 'auto' }}
          >
            <img
              src={`${item.src}?h=120&fit=crop&auto=format`}
              srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
            />
          </AspectRatio>
          <Box sx={{ whiteSpace: 'nowrap' }}>
            <Typography fontWeight="md">{item.title}</Typography>
            <Typography level="body2">{item.description}</Typography>
          </Box>
        </Card>
      ))}
    </Box>
    </div>
  </div>
  )
}

export default HomePage