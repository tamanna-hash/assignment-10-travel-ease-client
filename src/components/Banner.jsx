import { useEffect, useRef, useState } from 'react';
import vdo1 from '../assets/istockphoto-1449392231-640_adpp_is.mp4';
import vdo2 from '../assets/istockphoto-1467578274-640_adpp_is.mp4';
import vdo3 from '../assets/istockphoto-1303411994-640_adpp_is.mp4';
import { useNavigate } from 'react-router';

const Banner = () => {
    const videos = [vdo3, vdo2, vdo1]; // array of videos
    const [current, setCurrent] = useState(0);
    const videoRef = useRef(null);
    const navigate = useNavigate()
    const handleVideoEnd = () => {
        setCurrent((prev) => (prev + 1) % videos.length);
    };

    // Play video whenever current changes
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load(); // reload new src
            videoRef.current.play().catch(() => { }); // ensure autoplay
        }
    }, [current]);
    const handleBtn = () => {
        navigate('/allVehicles')
    }
    return (
        <div className="relative w-full h-[70vh] overflow-hidden">
            {/* Video Background */}
            <video
                ref={videoRef}
                autoPlay
                muted
                onEnded={handleVideoEnd}
                className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none -translate-x-1/2 -translate-y-1/2 object-cover z-[-1]"
            >
                <source src={videos[current]} type="video/mp4" />
            </video>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            {/* Content */}
            <div className="relative jost z-10 animate__animated animate__fadeInUp flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Explore the World, Effortlessly</h1>
                <p className="text-base md:text-lg mb-4">
                    Book trips, discover destinations, and travel with ease.
                </p>
                <button onClick={handleBtn} className="mt-6 px-6 py-3 bg-amber-500 hover:bg-amber-600 rounded-full text-white font-semibold">
                    All Vehicles
                </button>
            </div>
        </div>
    );
};

export default Banner;
