import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  endereco: string = '';
  numero: string = '';
  complemento: string = '';
  formaPagamento: string = '';

  constructor() { }

  ngOnInit() {
  }
  atualizaEndereco(endereco: any): void {
    this.endereco = endereco;
  }
  atualizaNumero(numero: string): void {
    this.numero = numero;
  }

  atualizaComplemento(complemento: string): void {
    this.complemento = complemento;
  }

  atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento;
  }

}
