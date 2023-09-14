import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css'],
})
export class GoalsComponent implements OnInit {
   // objetivos a serem exibidos no front
  goals = [
    {
      imageUrl: '../../../../assets/Imagens/alcance-global.svg',
      title: 'Alcance Global',
      description:
        'O marketing digital permite que você alcance um público global sem fronteiras físicas. Você pode alcançar pessoas de diferentes partes do mundo sem precisar estabelecer presença física em cada local...',
    },
    {
      imageUrl: '../../../../assets/Imagens/maior-segmentacao.svg',
      title: 'Maior Segmentação',
      description:
        'Com ferramentas de marketing digital, você pode segmentar seu público-alvo com base em características demográficas, comportamentais, geográficas e psicográficas. Isso permite que você direcione...',
    },
    {
      imageUrl: '../../../../assets/Imagens/mensuracao-precisa.svg',
      title: 'Mensuração Precisa',
      description:
        'Uma das grandes vantagens do marketing digital é a capacidade de medir o desempenho de suas campanhas de forma precisa e em tempo real. Você pode acompanhar métricas como taxa de abertura...',
    },
    {
      imageUrl: '../../../../assets/Imagens/custo-mais-baixo.svg',
      title: 'Custo Mais Baixo',
      description:
        'Em comparação com o marketing tradicional, o marketing digital costuma ser mais acessível, especialmente para pequenas empresas. Existem várias táticas de baixo custo, como marketing de mídia social...',
    },
    {
      imageUrl: '../../../../assets/Imagens/variedades-de-canais.svg',
      title: 'Variedades de Canais',
      description:
        'O marketing digital oferece uma ampla variedade de canais para escolher, como mídias sociais, marketing de conteúdo, e-mail marketing, anúncios pagos, SEO, marketing de influenciadores, entre outros...',
    },
    {
      imageUrl: '../../../../assets/Imagens/interatividade.svg',
      title: 'Interatividade',
      description:
        'O marketing digital oferece a oportunidade de interagir diretamente com seu público-alvo por meio de redes sociais, comentários em blogs, bate-papo ao vivo e outros canais. Isso ajuda a construir...',
    },
  ];
  // declarando variavel para controlar o scroll do carousel
  scrollAmount: number = 0;

  // metodo construtor
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // função que verifica se é mobile ou nao
  isMobileDevice(): boolean {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const mobileKeywords = ['android', 'webos', 'iphone', 'ipad', 'ipod', 'blackberry', 'iemobile', 'opera mini'];
  
    return mobileKeywords.some(keyword => userAgent.includes(keyword));
  }
  // ao ser montado, é rodado a função para verificar se é mobile ou nao, assim decidindo quantos scrolls no carousel
  ngOnInit() {
    const isMobile = this.isMobileDevice();
    // if que verifica se é mobile para o slide do carousel passar de 1 em 1, senao passa de 3 em 3
    if (isMobile) {
      // scroll do carousel agora passa de1 em 1
      this.scrollAmount = 1;
    } else {
      // scroll do carousel agora passa de 3 em 3
      this.scrollAmount = 3;
    }
  }

 

// função de scroll do carousel
  scrollCarousel(direction: 'left' | 'right'): void {
    const carousel = this.el.nativeElement.querySelector('.carousel');
    const itemWidth = carousel.querySelector('.carousel-item').offsetWidth;
    // const scrollAmount = 3;

    if (direction === 'left') {
      carousel.scrollLeft -= itemWidth * this.scrollAmount;
    } else if (direction === 'right') {
      carousel.scrollLeft += itemWidth * this.scrollAmount;
    }
  }
}
