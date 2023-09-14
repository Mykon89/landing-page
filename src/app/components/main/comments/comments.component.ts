import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  comments = [
    {
      avatar: '../../../../assets/Imagens/alcance-global.svg',
      author: 'Helvys',
      comment:
        'O marketing digital permite que você alcance um público global sem fronteiras físicas. Você pode alcançar pessoas de diferentes partes do mundo sem precisar estabelecer presença física em cada local...',
    },
    {
      avatar: '../../../../assets/Imagens/alcance-global.svg',
      author: 'Luiz',
      comment:
        'O marketing digital permite que você alcance um público global sem fronteiras físicas. Você pode alcançar pessoas de diferentes partes do mundo sem precisar estabelecer presença física em cada local...',
    },
  ];
}
