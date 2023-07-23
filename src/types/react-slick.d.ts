declare module 'react-slick' {
    import { ComponentType } from 'react';
  
    interface Settings {
      // Adicione aqui as propriedades do carrossel que você deseja utilizar
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      responsive?: {
        breakpoint: number;
        settings: {
          slidesToShow: number;
          slidesToScroll: number;
        };
      }[];
    }
  
    const Slider: ComponentType<Settings>;
  
    export default Slider;
  }