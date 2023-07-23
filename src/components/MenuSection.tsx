import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/responsive.css'
import { MenuResponsive } from "./MenuResponsive";

export const MenuSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
            easing: 'ease-in-out',
        });
        AOS.refresh();
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 900) {
                setIsMenuOpen(false);
            } else {
                setIsMenuOpen(true);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };



    return (
        <section id="home">
            <div className='h-[90vh] w-[95vw] shadow-black shadow-[25px_25px_40px_rgba(0,0,0,0.75)] bg-[#2A2B2D] flex justify-center flex-wrap'>
                <div id='menu' className='items-center flex justify-between h-14 w-full max-w-[90%]'>
                    <div id="logo" className='flex items-center'>
                        <img src="./img/logo.png" alt="" className='h-8 w-8' data-aos="fade-left" />
                        <h1 className='font-["Inter"] text-white pl-3 font-medium text-2xl' data-aos="fade-right">João Felipe</h1>
                    </div>
                    <div className="btn-responsive">
                        <div id="btn" className={`${window.innerWidth > 900 ? 'close' : 'open'}`}>
                            <h1 className="text-xl pr-3 text-white">Menu</h1>
                            <button onClick={toggleMenu}>
                                <img src="./img/menu.png" alt="" className="w-[30px] h-[30px]" />
                            </button>
                        </div>
                    </div>
                    <div id="nav">
                        <ul className='flex text-white text-xl font-normal'>
                            <Link
                                to="home"
                                smooth={true}
                                duration={500}
                                className='cursor-pointer'
                            >
                                <li className='pr-16 hover:text-[#FFCC00] ease-in-out duration-300 cursor-pointer'>Home </li>
                            </Link>
                            <Link
                                to="about"
                                smooth={true}
                                duration={500}
                                className='cursor-pointer'
                            >
                                <li className='pr-16 hover:text-[#FFCC00] ease-in-out duration-300 cursor-pointer'>Sobre</li>
                            </Link>
                            <Link
                                to="skill"
                                smooth={true}
                                duration={500}
                                className='cursor-pointer'
                            >
                                <li className='pr-16 hover:text-[#FFCC00] ease-in-out duration-300 cursor-pointer'>Skills</li>
                            </Link>
                            <Link
                                to="projects"
                                smooth={true}
                                duration={500}
                                className='cursor-pointer'
                            >
                                <li className='pr-16 hover:text-[#FFCC00] ease-in-out duration-300 cursor-pointer'>Projetos</li>
                            </Link>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className='cursor-pointer'
                            >
                                <li className='hover:text-[#FFCC00] ease-in-out duration-300 cursor-pointer'>Contato</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className={`${isMenuOpen ? 'flex' : 'hidden'} ${window.innerWidth > 900 ? 'close' : 'open'} menu-responsive`}>
                    <div id="menu-content">
                        {isMenuOpen && (
                            <MenuResponsive />
                        )}
                    </div>
                </div>
                <div id="content" className='grid grid-cols-2 max-w-[90%] w-full text-white'>
                    <div id="description" className='flex flex-col justify-around' data-aos-offset="200">
                        <div id="apresentation">
                            <h1 className='text-4xl font-bold leading-[50px] title-responsive' data-aos="fade-up">Seja Bem Vindo,</h1>
                            <h1 className='text-4xl font-bold leading-[50px] title-responsive' data-aos="fade-up">Eu sou o <span className='text-[#FFCC00]'>João Felipe</span></h1>
                            <p className='text-xl font-light leading-[50px]' data-aos="fade-up">Veja Meu portifólio</p>
                        </div>
                        <div id="btn">
                            <button className="rounded-full p-4 bg-[#FDA60A] transform transition-transform duration-300 ease-in-out hover:scale-110 font-bold">Saiba mais sobre mim</button>
                        </div>
                        <div id="medias" className="flex">
                            <a href="https://github.com/Jaumjoao" target="_blank"><img src="./img/git.png" alt="git" className="pr-10 transform transition-transform duration-300 ease-in-out hover:scale-110" /></a>
                            <a href="https://www.linkedin.com/in/jo%C3%A3o-felipe-976478231/" target="_blank"><img src="./img/linkedin.png" alt="linkedin" className="pr-10 transform transition-transform duration-300 ease-in-out hover:scale-110" /></a>
                            <a href=""><img src="./img/instagram.png" alt="instagram" className="transform transition-transform duration-300 ease-in-out hover:scale-110" /></a>
                        </div>
                    </div>
                    <div id="img-content" className="w-3/4">
                        <img src="./img/img-content.png" alt="" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
}