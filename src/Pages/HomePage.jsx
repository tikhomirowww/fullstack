import React from 'react';
import { Button } from '@mui/material';

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

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
      <div className='main' style={{background: '#78909c', width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: '80%', borderRadius: '20px'}}>
        <div className='title' >
        <h2 style={{textAlign: 'center', fontSize: '27px'}}>Read whataver you want <br/>
        wherever you want!</h2>
        </div>
        <div className="slideshow" style={{borderRadius: '20px'}}>
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
  )
}

export default HomePage