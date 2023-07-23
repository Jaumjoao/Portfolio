import React, { useEffect, useState } from 'react';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

export const ContatoTeste = () => {

    const emailToCopy = 'joao.5.felipe8@gmail.com';
    const [isCopiedEmail, setIsCopiedEmail] = useState(false);
    const telCopy = '45998521542';
    const [isCopiedTel, setIsCopiedTel] = useState(false);

  
    const handleCopyEmail = () => {
      try {
        navigator.clipboard.writeText(emailToCopy);
        setIsCopiedEmail(true);
        setTimeout(() => {
          setIsCopiedEmail(false);
        }, 3000);
      } catch (err) {
        console.error('Erro ao copiar o email: ', err);
        alert('Ocorreu um erro ao copiar o email para a área de transferência.');
      }
    };

    const handleCopyTel = () =>{
        try{
            navigator.clipboard.writeText(telCopy);
            setIsCopiedTel(true);
            setTimeout(() => {
                setIsCopiedTel(false);
            }, 3000);
        } catch (err) {
            console.log('Erro ao copiar o telefone: ', err);
            alert('Ocorreu um erro ao copiar o telefone para a área de transferência.')
        }
    }

    useEffect(() => {
        AOS.init({
          duration: 1000,
          offset: 100,
          easing: 'ease-in-out',
        });
        AOS.refresh();
      }, []);


    return (
        <div id="contact" className="bg-[#141414] flex flex-col justify-evenly items-center">
            <div className="title" data-aos="fade-down">
                <h1 className="text-white text-3xl font-bold">Entre em contato</h1>
            </div>
            <div className="Contacts flex w-[90%] justify-evenly text-white">
                <div onClick={handleCopyEmail} className={`${isCopiedEmail ? 'copied-animation' : ''} email cursor-pointer`} data-aos="fade-right">
                    <p className="text-center pb-3">Entre em contato pelo Email</p>
                    <div className="cardContact bg-[#1b1b1b] h-[200px] w-[250px] flex flex-col justify-evenly items-center">
                        <img src={isCopiedEmail ? './img/ok.png' : './img/email.png'} alt="" className="h-auto w-[50px] transform transition-transform duration-300 ease-in-out"/>
                        <p>Clique para copiar</p>
                        <p>{emailToCopy}</p>
                    </div>
                </div>
                <div onClick={handleCopyTel} className={`${isCopiedEmail ? 'copied-animation' : ''} tel cursor-pointer`} data-aos="fade-left">
                    <p className="text-center pb-3">Entre em contato pelo Telefone</p>
                    <div className="cardContact bg-[#1b1b1b] h-[200px] w-[250px] flex flex-col justify-evenly items-center">
                        <img src={isCopiedTel ? './img/ok.png' : './img/tel.png'} alt="" className="h-auto w-[50px]"/>
                        <p>Clique para copiar</p>
                        <p>(45) 9 9999-9999</p>
                    </div>
                </div>
            </div>
        </div>
    );
}