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
                        <p>Meus hobbies incluem jogar bola, desfrutar de jogos eletrônicos, passar tempo de qualidade com minha família e acompanhar os jogos do meu time de coração. Meu primeiro contato com a programação foi na escola, onde me formei como técnico em informática. Foi durante o primeiro ano, na disciplina de lógica de programação, que tive conhecimento sobre a existência de profissionais nessa área. Essa descoberta abriu um mundo de oportunidades para mim, e desde então venho me dedicando a estudar e aprimorar minhas habilidades cada vez mais. Daqui a cinco anos, tenho a visão de mim mesmo como um profissional excelente, atuando como desenvolvedor sênior fullstack. Estou empenhado em alcançar esse objetivo e sei que o caminho para o sucesso demandará dedicação, aprendizado contínuo e trabalho árduo. Estou ansioso para enfrentar os desafios que virão pela frente e contribuir de forma significativa no campo da tecnologia.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}