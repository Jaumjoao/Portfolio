import React, { useEffect, useState } from 'react';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

export const ContatoSection: React.FC = () => {

  const styleDivBtn = `btn-copy flex items-center bg-slate-100 w-[320px] rounded-md border transform transition-transform duration-300 ease-in-out hover:scale-110`;
  const emailToCopy = 'joao.5.felipe8@gmail.com';
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    try {
      navigator.clipboard.writeText(emailToCopy);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000); // A animação será removida após 3 segundos
    } catch (err) {
      console.error('Erro ao copiar o email: ', err);
      alert('Ocorreu um erro ao copiar o email para a área de transferência.');
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  return (
    <section id='contact'>
      <div id="container" className="h-screen w-screen">
      <div className="text-4xl font-bold text-center h-[100px] flex flex-col justify-center mb-[50px]">
        <h1>Entre em contato</h1>
      </div>
      <div className="contact grid grid-cols-2 relative">
        <div className="img" data-aos="fade-right">
          <img src="./img/falecomigo.png" alt="" className="h-auto w-[500px] m-auto" />
        </div>
        <div className="area-copy flex flex-col justify-center ml-[70px]">
          <div data-aos="fade-left">
            <h1 className="mb-10 text-xl font-semibold">Copie meu E-mail</h1>
            <div className="btn">
              <button onClick={handleCopyClick} className={isCopied ? 'copied-animation' : ''}>
                <div className={styleDivBtn}>
                  <div className="icon py-[15px] px-[15px] border">
                    <img
                      src={isCopied ? './img/checkmark-done-outline.svg' : './img/copy-outline.svg'}
                      alt=""
                      className="h-auto w-[30px] transform transition-transform duration-3000 ease-in-out"
                    />
                  </div>
                  <span className="pl-[10px] text-lg font-medium">{emailToCopy}</span>
                </div>
              </button>
            </div>
            <h1 className='mt-10 text-xl font-semibold'>Ou</h1>
            <div className="redes flex mt-10">
              <a href="https://github.com/Jaumjoao" target="_blank"><img src="./img/githublogo.png" alt="git" className="pr-10 transform transition-transform duration-300 ease-in-out hover:scale-110 h-auto w-[80px]" /></a>
              <a href="https://www.linkedin.com/in/jo%C3%A3o-felipe-976478231/" target="_blank"><img src="./img/linkedinlogo.png" alt="linkedin" className="pr-10 transform transition-transform duration-300 ease-in-out hover:scale-110 h-auto w-[80px]" /></a>
              <a href=""><img src="./img/instagramlogo.png" alt="instagram" className="transform transition-transform duration-300 ease-in-out hover:scale-110 h-auto w-[40px]" /></a>
            </div>
          </div>
          <div className="absolute h-full w-px bg-black top-0 left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>
    </div>
    </section>
  );
};
