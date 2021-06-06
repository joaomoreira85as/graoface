import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  cardapio = [
    {
      titulo: 'SEGUNDA FEIRA',
      itens: [
        {descricao: 'SOBRECOXA DESOSSADA GRELHADA (150G)', preco: 16.90},
        {descricao: 'FILÉ SUÍNO AO MOLHO DE LARANJA (150G)', preco: 18.90},
        {descricao: 'BIFE ACEBOLADO (150G)', preco: 22.90},
        {descricao: 'FILÉ DE PEIXE GRELHADO (200G)', preco: 26.90},
      ]
    }
  ];
  ngOnInit(): void {
  }

}
