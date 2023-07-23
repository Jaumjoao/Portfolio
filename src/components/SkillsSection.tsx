import React, { useEffect, useRef } from 'react';
import * as AOS from 'aos';
import 'aos/dist/aos.css';


export const SkillsSection: React.FC = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
            easing: 'ease-in-out',
        });
        AOS.refresh();
    }, []);

    const styleCard = `w-[160px] h-[150px] flex flex-col items-center justify-evenly bg-[#171717] transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0px_0px_50px_rgba(34,68,54,1)]`;


    return (
        <section id='skill' className='bg-[#141414] w-screen h-screen flex flex-col items-center'>
            <div id="container" className=' max-w-[80%]'>
                <div id="title" className='h-[170px] flex flex-col justify-evenly'>
                    <h1 className='text-[#FFCC00] text-center text-5xl font-bold'>Skills</h1>
                    <p className='text-white text-center text-lg'>Nesta página, você encontrará uma lista das linguagens de programação e tecnologias que tenho conhecimento com os níveis de conhecimento que eu possuo em cada um.</p>
                </div>
                <div id="skills" className='text-white flex flex-wrap mt-10'>
                    <div id="line1" className='w-full flex flex-row justify-between' data-aos="fade-right">
                        <div id="card" className={styleCard}>
                            <img src="./img/html.png" alt="" className='h-auto w-[70px]' />
                            <img src="./img/avancado.png" alt="" className='h-auto w-[70px]' />
                            <h1>HTML5</h1>
                        </div>
                        <div id="card" className={styleCard}>
                            <img src="./img/css.png" alt="" className='h-auto w-[70px]' />
                            <img src="./img/avancado.png" alt="" className='h-auto w-[70px]' />
                            <h1>CSS3</h1>
                        </div>
                        <div id="card" className={styleCard}>
                            <img src="./img/js.png" alt="" className='h-auto w-[70px]' />
                            <img src="./img/avancado.png" alt="" className='h-auto w-[70px]' />
                            <h1>JavaScript</h1>
                        </div>
                        <div id="card" className={styleCard}>
                            <img src="./img/react.png" alt="" className='h-auto w-[70px]' />
                            <img src="./img/bom.png" alt="" className='h-auto w-[70px]' />
                            <h1>Reacts.JS</h1>
                        </div>
                        <div id="card" className={styleCard}>
                            <img src="./img/typescript.png" alt="" className='h-auto w-[70px]' />
                            <img src="./img/bom.png" alt="" className='h-auto w-[70px]' />
                            <h1>TypeScript</h1>
                        </div>
                    </div>
                    <div id="line2" className='w-full flex flex-row justify-between mt-[50px]' data-aos="fade-left">
                        <div id="card" className={styleCard}>
                            <img src="./img/tailwind.png" alt="" className='h-auto w-[70px]' />
                            <img src="./img/bom.png" alt="" className='h-auto w-[70px]' />
                            <h1>Tailwind</h1>
                        </div>
                        <div id="card" className={styleCard}>
                            <img src="./img/sass.png" alt="" className='h-auto w-[70px]' />
                            <img src="./img/bom.png" alt="" className='h-auto w-[70px]' />
                            <h1>SASS</h1>
                        </div>
                        <div id="card" className={styleCard}>
                            <img src="./img/mysql.png" alt="" className='h-auto w-[70px]' />
                            <img src="./img/bom.png" alt="" className='h-auto w-[70px]' />
                            <h1>MySQL</h1>
                        </div>
                        <div id="card" className={styleCard}>
                            <img src="./img/github.png" alt="" className='h-auto w-[70px]' />
                            <img src="./img/bom.png" alt="" className='h-auto w-[70px]' />
                            <h1>GitHub</h1>
                        </div>
                        <div id="card" className={styleCard}>
                            <img src="./img/php.png" alt="" className='h-auto w-[70px]' />
                            <img src="./img/basico.png" alt="" className='h-auto w-[70px]' />
                            <h1>PHP</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};