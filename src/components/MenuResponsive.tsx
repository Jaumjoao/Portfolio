import { Link } from "react-scroll";
import React, { useEffect, useRef } from 'react';
import * as AOS from 'aos';
import 'aos/dist/aos.css';



export const MenuResponsive = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
            easing: 'ease-in-out',
        });
        AOS.refresh();
    }, []);


    return (
        <nav className="" data-aos="fade-down">
            <ul className='text-xl font-semibold w-[40vw]'>
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className='cursor-pointer'
                >
                    <li className='hover:text-[#FFCC00] ease-in-out duration-300 cursor-pointer'>Home </li>
                </Link>
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className='cursor-pointer'
                >
                    <li className='hover:text-[#FFCC00] ease-in-out duration-300 cursor-pointer'>Sobre</li>
                </Link>
                <Link
                    to="skill"
                    smooth={true}
                    duration={500}
                    className='cursor-pointer'
                >
                    <li className='hover:text-[#FFCC00] ease-in-out duration-300 cursor-pointer'>Skills</li>
                </Link>
                <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    className='cursor-pointer'
                >
                    <li className='hover:text-[#FFCC00] ease-in-out duration-300 cursor-pointer'>Projetos</li>
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
        </nav>
    );
}