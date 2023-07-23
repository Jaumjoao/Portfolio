import { SkillArray } from "@/data/SkillArray";
import { useEffect } from "react";
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/responsive.css';

export const SkillsSection = () => {

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
        <section id="skill" className="bg-[#141414] flex flex-col items-center relative">
            <div className="container h-full max-w-[80%] absolute flex flex-col justify-evenly items-center">
                <div id="title" className='h-[170px] flex flex-col justify-evenly'>
                    <h1 className='text-[#FFCC00] text-center text-5xl font-bold'>Skills</h1>
                    <p className='text-white text-center text-lg'>Nesta página, você encontrará uma lista das linguagens de programação e tecnologias que tenho conhecimento com os níveis de conhecimento que eu possuo em cada um.</p>
                </div>
                <div id="skills" className="grid grid-cols-5 w-full gap-7">
                    {SkillArray.map(item => (
                        <div key={item.id} id="card" className={`${styleCard}`} data-aos={item.aos}>
                            <img src={item.img} alt="" className='h-auto w-[70px]'/>
                            <img src={item.level} alt="" className='h-auto w-[70px]'/>
                            <h1 className="text-white">{item.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}