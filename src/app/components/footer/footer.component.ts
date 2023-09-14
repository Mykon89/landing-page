import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit  {
  name = "NOME DA PLATAFORMA";

  voltarAoTopo(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Rolar suavemente para o topo
  }
  ngOnInit(): void {
    
  }
}
