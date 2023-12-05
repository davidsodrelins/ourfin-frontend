import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';
import { theme } from '../styles/GlobalStyles';

const CarouselContainer = () => {
  const slides = [
    { src: "https://picsum.photos/1000?grayscale&random=1", caption: "O OurFin, uma solução de gerenciamento financeiro, permite aos usuários monitorar receitas e despesas com facilidade. Com uma interface intuitiva, categoriza gastos automaticamente, ajudando no controle orçamentário e na identificação de hábitos de consumo." },
    { src: "https://picsum.photos/1000?grayscale&random=2", caption: "A ferramenta oferece recursos de planejamento financeiro, incluindo definição de metas de curto e longo prazo. Usuários podem estabelecer e acompanhar objetivos como poupança para férias ou aposentadoria, visualizando seu progresso através de gráficos detalhados." },
    { src: "https://picsum.photos/1000?grayscale&random=3", caption: "O OurFin integra um sistema de alertas personalizáveis para lembretes de pagamentos e metas de poupança. A funcionalidade de alerta, ajustável para preferências individuais, evita multas por atraso e incentiva a disciplina financeira." },
    { src: "https://picsum.photos/1000?grayscale&random=4", caption: "Uma característica inovadora do OurFin é sua análise financeira baseada em IA, oferecendo insights personalizados sobre gastos. Isso auxilia os usuários a otimizar investimentos e melhorar a saúde financeira geral." },
    { src: "https://picsum.photos/1000?grayscale&random=5", caption: "O aplicativo promove a gestão colaborativa das finanças familiares, permitindo que membros da família acessem e contribuam para um orçamento compartilhado. Isso aumenta a transparência e melhora a administração das finanças domésticas." },
    { src: "https://picsum.photos/1000?grayscale&random=6", caption: "O OurFin fornece integração bancária segura, importando automaticamente transações de contas e cartões de crédito. A funcionalidade economiza tempo e aumenta a precisão, mantendo os dados protegidos por criptografia avançada." },
    { src: "https://picsum.photos/1000?grayscale&random=7", caption: "Compatível com dispositivos móveis, o OurFin oferece gerenciamento financeiro em qualquer lugar. Seus aplicativos para Android e iOS permitem aos usuários acessar informações financeiras, registrar gastos e receber notificações em tempo real, facilitando o controle financeiro diário." },
  ];


  return (
<StyledCarousel showArrows={true} infiniteLoop={true} autoPlay={true} showThumbs={false}>
  {slides.map((slide, index) => (
    <div key={`slide-${index}`}>
      <img src={slide.src} alt={`Slide ${index + 1}`} style={{height: "100vh"}} />
      <p className="legend">{slide.caption}</p>
    </div>
  ))}
</StyledCarousel>
  );
};

export default CarouselContainer;

const StyledCarousel = styled(Carousel)`

  .slide .legend {
    background: ${theme.primaryBlue} !important;
    color: #FFF !important;
    width: 50%;
    position: absolute;
    bottom: 40px;
    text-align: left;
    padding: 40px;
    font-size: 25px
  }

  .carousel-slider .control-dots {
    
  }
`;