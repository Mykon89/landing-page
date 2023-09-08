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
      description: 'Descrição do serviço 1.',
    },
    {
      imageUrl: 'caminho-para-imagem-2.jpg',
      title: 'Serviço 2',
      description: 'Descrição do serviço 2.',
    },
    {
      imageUrl: 'caminho-para-imagem-3.jpg',
      title: 'Serviço 3',
      description: 'Descrição do serviço 3.',
    },
    {
      imageUrl: 'caminho-para-imagem-4.jpg',
      title: 'Serviço 4',
      description: 'Descrição do serviço 4.',
    },
  ];
}
