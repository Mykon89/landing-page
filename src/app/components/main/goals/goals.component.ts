import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css'],
})
export class GoalsComponent {
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
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  scrollCarousel(direction: 'left' | 'right'): void {
    const carousel = this.el.nativeElement.querySelector('.carousel');
    const itemWidth = carousel.querySelector('.carousel-item').offsetWidth;
    const scrollAmount = 3;

    if (direction === 'left') {
      carousel.scrollLeft -= itemWidth * scrollAmount;
    } else if (direction === 'right') {
      carousel.scrollLeft += itemWidth * scrollAmount;
    }
  }
}
