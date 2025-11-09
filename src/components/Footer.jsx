import { TiSocialDribbble, TiSocialFacebook, TiSocialTwitter } from 'react-icons/ti';
import { Link } from 'react-router';
import logo from '../assets/logo.jpg'
import { FaInstagram } from 'react-icons/fa';
const Footer = () => {
    return (
        <div>
            <footer className=" bg-[#152748] py-3">
                <div className='flex flex-col md:flex-row gap-2 justify-between  px-7'>
                    <div className='flex gap-2 items-center'>
                        <img src={logo} alt="" className='md:h-10 md:w-10 h-5 w-5 rounded-[50%]' />
                        <Link to='/home' className="md:text-xl fredoka font-bold text-blue-400">TravelEase</Link>
                    </div>
                    <div className='text-gray-700 flex gap-2'>
                        <div className='flex flex-col lg:flex-row items-center gap-2 text-xs md:text-sm text-gray-500'>
                            <a className="link link-hover">Contact info</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                            <a className="link link-hover">Terms of use</a>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-gray-500 text-xs md:text-sm font-semibold'>Follow us on  ----</p>
                        <TiSocialFacebook className='i' />
                        <TiSocialTwitter className='i' />
                        <FaInstagram className='i ' />
                        <TiSocialDribbble className='i' />
                    </div>
                </div>
                <p className='text-gray-500 text-start text-xs md:text-sm pl-6 py-2'>Copyright © {new Date().getFullYear()} - All right reserved by PawfectCare studio</p>
            </footer>
        </div>
    );
};

export default Footer;