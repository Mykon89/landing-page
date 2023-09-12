import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  services = [
    {
      imageUrl: '../../../../assets/Imagens/dashboard.svg',
      title: 'Dashboard',
      description:
        'Nosso serviço de dashboard é uma solução completa que visa simplificar a visualização e interpretação de dados para ajudar sua empresa a prosperar.',
    },
    {
      imageUrl: '../../../../assets/Imagens/visibilidade.svg',
      title: 'Visibilidade',
      description:
        'No mundo atual, as redes sociais desempenham um papel fundamental na construção da marca e no envolvimento com o público-alvo. No entanto, gerenciar eficazmente sua presença nas redes sociais pode ser desafiador devido à quantidade esmagadora de dados e métricas. É aqui que nosso serviço de redes sociais entra em ação.',
    },
    {
      imageUrl: '../../../../assets/Imagens/googlemaps.svg',
      title: 'Maps',
      description:
        'Google Maps é uma ferramenta poderosa que permite acompanhar, analisar e aprimorar sua presença nas listagens de negócios do Google Maps. Ele oferece insights valiosos para ajudar sua empresa a se destacar na plataforma e atrair mais clientes locais.',
    },
    {
      imageUrl: '../../../../assets/Imagens/melhorias.svg',
      title: 'Alavancar o negócio',
      description:
        'No cenário empresarial altamente competitivo de hoje, a tomada de decisões informadas e estratégicas é a chave para o crescimento e o sucesso. Apresentamos nosso serviço, uma ferramenta essencial para alavancar o seu negócio a novos patamares.',
    },
  ];
}
