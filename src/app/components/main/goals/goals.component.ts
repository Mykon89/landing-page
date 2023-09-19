import { Component, OnInit } from '@angular/core';

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
      imageAlt: 'Imagem referente a maior segmentação',
      title: 'Alcance Global',
      description:
        'O marketing digital permite que você alcance um público global sem fronteiras físicas. Você pode alcançar pessoas de diferentes partes do mundo sem precisar estabelecer presença física em cada local...',
    },
    {
      imageUrl: '../../../../assets/Imagens/maior-segmentacao.svg',
      imageAlt: 'Imagem referente a maior segmentação',
      title: 'Maior Segmentação',
      description:
        'Com ferramentas de marketing digital, você pode segmentar seu público-alvo com base em características demográficas, comportamentais, geográficas e psicográficas. Isso permite que você direcione...',
    },
    {
      imageUrl: '../../../../assets/Imagens/mensuracao-precisa.svg',
      imageAlt: 'Imagem referente a maior segmentação',
      title: 'Mensuração Precisa',
      description:
        'Uma das grandes vantagens do marketing digital é a capacidade de medir o desempenho de suas campanhas de forma precisa e em tempo real. Você pode acompanhar métricas como taxa de abertura...',
    },
    {
      imageUrl: '../../../../assets/Imagens/custo-mais-baixo.svg',
      imageAlt: 'Imagem referente a maior segmentação',
      title: 'Custo Mais Baixo',
      description:
        'Em comparação com o marketing tradicional, o marketing digital costuma ser mais acessível, especialmente para pequenas empresas. Existem várias táticas de baixo custo, como marketing de mídia social...',
    },
    {
      imageUrl: '../../../../assets/Imagens/variedades-de-canais.svg',
      imageAlt: 'Imagem referente a maior segmentação',
      title: 'Variedades de Canais',
      description:
        'O marketing digital oferece uma ampla variedade de canais para escolher, como mídias sociais, marketing de conteúdo, e-mail marketing, anúncios pagos, SEO, marketing de influenciadores, entre outros...',
    },
    {
      imageUrl: '../../../../assets/Imagens/interatividade.svg',
      imageAlt: 'Imagem referente a maior segmentação',
      title: 'Interatividade',
      description:
        'O marketing digital oferece a oportunidade de interagir diretamente com seu público-alvo por meio de redes sociais, comentários em blogs, bate-papo ao vivo e outros canais. Isso ajuda a construir...',
    },
  ];
  // array vazio para agrupar os slides
  slidesAgrupados: any[] = [];

  // metodo construtor para agrupar 3 imagens por slide.
  constructor() {
    this.slidesAgrupados = this.agruparImagens(this.goals, 3);
  }

  // iteração para o grupo de cada slide
  private agruparImagens(imagens: any[], tamanho: number): any[] {
    const grupos: any[] = [];
    for (let i = 0; i < imagens.length; i += tamanho) {
      grupos.push(imagens.slice(i, i + tamanho));
    }
    return grupos;
  }

  ngOnInit() {}
}
