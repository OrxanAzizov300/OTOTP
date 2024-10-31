import Aos, { init } from 'aos';
import './Home.css'
import { useEffect, useRef, } from 'react';
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';


const Home = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    const handleVideoEnd = () => {
      video.pause()
    }
    if (video) {
      video.addEventListener('ended', handleVideoEnd)
    }
  }, [])
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) {
      // If not, send them back to login
      navigate('/login');
    }
  }, [navigate]);

  useEffect(()=>{
    Aos.init({
      duration:500,
      offset:100,
      once: false
    })
  },[]);

  return (
    <div>
      <div className='border-none w-full'>
        <video ref={videoRef} className='normal-video w-full ' autoPlay muted loop={false} src="/public/ototp_video.mp4"></video>
      </div>
      <div className='container mx-auto px-4 sm:px-6 md:px-8'>
        <h1 data-aos="fade-up">Hello, this text will move up</h1>
        <img src="/public/560x315-abstract-ice-water-free-website-background-image.jpg" alt="" data-aos="fade-up" />
      </div>
    </div>

  );
};

export default Home;