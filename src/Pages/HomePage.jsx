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
      src: 'https://libking.ru/uploads/posts/books/438596.jpg',
      title: 'Он выбрал гвозди',
      description: '4.36M views',
      id: 1
    },
    {
      src: 'https://www.litmir.me/data/Book/0/225000/225704/BC4_1490700071.jpg',
      title: 'Он всё ещё двигает камни',
      description: '4.74M views',
      id: 2
    },
    {
      src: 'https://books.google.kg/books/publisher/content?id=j6d2EAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&sig=ACfU3U3IvzabIV_3M3X56UFg4TW-LpPYEw&w=1280',
      title: 'Пять языков любви',
      description: '3.98M views',
      id: 3
    },
    {
      src: 'https://books.google.kg/books/content?id=0EG72orpvgIC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71ydr7u8L7eAWV9E_Uq6nIfeX6gzbr-7RzcE4BLeTJLs_qJxPKtFvh_2c9WAPJmaRwftxCl8nVmfEjDvOaqwL3GMGqgRjXkhtx-rXQkFjaDEJJQYwrKCTKbzNRh1dAO9nJFaCJf',
      title: 'Любовь как образ жизни',
      description: '4.21M views',
      id: 4
    },
    {
      src: 'https://russia-church.com/wp-content/uploads/2017/05/9Uz6xonUvak-201x300.jpg',
      title: 'История любви, написанная Богом',
      description: '4.74M views',
      id: 5
    }
  ];
  

  return (
    <div style={{displey: 'flex', flexDirection: 'column', paddingTop: '2%' }}>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '11vh', background: 'rgb(11,	83,	148, .7)', color: '#f0c33b', fontSize: '18px', width: '50%', borderRadius: '20px', margin: 'auto'}}className="center">
      <h1>Your Guide To The World Of Knowledge</h1>
    </div>
    <div style={{display: 'flex', justifyContent: "space-around", alignItems: 'center', height: '50vh', paddingTop: '4%' }}>
      <div className="leftBlock"  style={{color: '#f0c33b',  background: 'rgb(11,	83,	148, .7)', fontSize: '18px', textAlign: 'center', padding: '2%', borderRadius: '20px'}}>
        <h2 style={{padding: '3%'}}>Just Download The Applications <br/> And  Together We Will Open New Horizons</h2>
        <div style={{fontSize: '80px'}}>
        <a href="#"> <img src="https://maratapiev.github.io/projectgid/img/Badges%20RUSSIAN%20(1).png" alt="" /></a>
        <a href="#"> <img src="https://maratapiev.github.io/projectgid/img/Badges%20RUSSIAN.png" alt="" /></a>
        </div>
      </div>
      <div className='rightBlock' style={{background: 'rgb(11,	83,	148, .7)', color: '#f0c33b', padding: '1%', borderRadius: '20px'}}>
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
    <div style={{display: 'flex', justifyContent: 'center', paddingTop: '40px', height: '170px'}}>
    <Box
    fontSize='large'
      sx={{
        background: 'rgb(11,	83,	148, .9)',
        color: '#f0c33b',
        borderRadius: '20px',
        display: 'flex',
        gap: 1,
        py: 1,
        overflow: 'auto',
        width: 500,
        scrollSnapType: 'x mandatory',
        padding: '1%',
        '& > *': {
          scrollSnapAlign: 'center',
        },
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {data.map((item) => (
        <Card
          row
          key={item.id}
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
          <Box sx={{ whiteSpace: 'nowrap'}}>
            <Typography sx={{width: '5%'}} fontWeight="md">{item.title}</Typography>
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