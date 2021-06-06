import { Transferencia } from './../../models/transferencia.model';
import { TransferenciaService } from './../../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  // @Output() aoTransferir = new EventEmitter<any>();
  valor: number;
  destino: string;

  constructor(private service: TransferenciaService, private router: Router) {}

  ngOnInit(): void {
    this.limparCampos();
  }

  transferir(): void {
    console.log('Solicitada nova transferência');
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      this.router.navigateByUrl('extrato');
    },
    error => {
      console.error(error);
    });
  }

  limparCampos(): void{
    this.valor = null;
    this.destino = null;
  }
}
