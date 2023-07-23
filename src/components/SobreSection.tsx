import { useEffect } from "react";
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/responsive.css';

export const SobreSection = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 100,
            easing: 'ease-in-out',
        });
        AOS.refresh();
    }, []);


    return (
        <section id="about" className="w-screen h-screen bg-[#FFFFFF] grid grid-cols-2 text-base">
            <div id="part1" className="bg-[#141414]">
                <div className="max-w-[70%] m-auto flex flex-col justify-evenly h-full pb-[50px] conteudo" data-aos="fade-right">
                    <div className="h-16 w-16 mx-auto" id="logo">
                        <img src="./img/logo-grande.png" alt="" />
                    </div>
                    <div className="title text-white">
                        <h1 className="text-center text-6xl font-bold title-responsive">Sobre mim</h1>
                    </div>
                    <div className="myDescription text-white">
                        <h2 className="text-center text-3xl font-normal desc-responsive">Meu nome é João Felipe Ribeiro da Silva, tenho 19 anos e sou natural de Cascavel, Paraná. </h2>
                    </div>
                    <div className="text text-white">
                        <p>Desde cedo, descobri minha paixão pela área da programação e venho me dedicando      constantemente a aprimorar meus conhecimentos nesse campo emocionante.
                            Sou formado em Técnico em Informática e durante meu curso, tive a oportunidade de mergulhar no mundo da programação, explorando diferentes linguagens e tecnologias. A cada linha de código que escrevo, sinto uma empolgação única, pois enxergo a capacidade transformadora que a programação possui.
                        </p>
                    </div>
                </div>
            </div>
            <div id="part2" className="bg-[#FFCC00]">
                <div className="max-w-[70%] m-auto flex flex-col justify-evenly h-full conteudo" data-aos="fade-left">
                    <div className="img-content flex justify-center" >
                        <img id="img" src="./img/img-programing.png" alt="" className="w-1/2 h-auto shadow-black shadow-[8px_8px_10px_rgba(0,0,0,0.75)] transition-transform duration-300 ease-in-out transform-gpu hover:scale-105" />
                    </div>
                    <div className="text">
                        <p>Meu objetivo é criar soluções inovadoras e impactantes através da tecnologia. Acredito que a programação é uma forma de dar vida às ideias e torná-las realidade. Estou sempre em busca de novos desafios e projetos interessantes que me permitam crescer e expandir minha experiência.
                            Ao longo da minha jornada, tenho me dedicado a aprender e dominar áreas, como desenvolvimento web. Além disso, estou constantemente atualizando meus conhecimentos para acompanhar as tendências e avanços tecnológicos.
                            Estou empolgado com as possibilidades infinitas que a programação oferece e estou ansioso para enfrentar novos desafios e colaborar em projetos empolgantes. Se você está em busca de um desenvolvedor apaixonado e comprometido, estou pronto para trabalhar ao seu lado e tornar suas ideias em realidade.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}