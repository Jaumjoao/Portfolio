import React from 'react';
import { ProjectArray } from "@/data/ProjectsArray";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const ProjectSection: React.FC = () => {

  const styleCard = `flex flex-col items-center justify-center w-[400px]`;
  const styleDescriptionCard = `description w-[400px] h-[100px] flex flex-col justify-center bg-[#171717] pl-6`;

  const carouselSettings: React.ComponentPropsWithoutRef<typeof Slider> = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <section id='projects' className='h-screen w-screen'>
      <div id="container" className="w-[90%] m-auto flex flex-col h-screen justify-evenly">
        <div id="titleProjects" className="h-[100px] flex justify-center items-center text-4xl font-bold text-[#F5F4FC]">
          <h1 className=''>Alguns dos meus projetos</h1>
        </div>
        <div>
          <Slider {...carouselSettings}>
            {ProjectArray.map((item) => (
              <div key={item.id} className={styleCard} id="card">
                <a href={item.link} target="_blank" className="text-[#b787ff] text-xl">
                  <div id="img">
                    <img src={item.img} alt="Planejador Diario" className="h-auto w-[400px]" />
                  </div>
                  <div className={styleDescriptionCard}>
                    <h1 className="text-1xl font-bold text-[#F5F4FC]">{item.title}</h1>
                    {item.linkPage}
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}