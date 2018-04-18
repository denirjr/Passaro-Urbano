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

  enderecoValido: boolean;
  numeroValido: boolean;
  complementoValido: boolean;
  formaPagamentoValido: boolean;

  constructor() { }

  ngOnInit() {
  }
  atualizaEndereco(endereco: any): void {
    this.endereco = endereco;
    if (this.endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }
  }
  atualizaNumero(numero: string): void {
    this.numero = numero;
    if (this.numero.length > 0 ) {
      this.numeroValido = true;
  } else  {
      this.numeroValido = false;
    }
  }

  atualizaComplemento(complemento: string): void {
    this.complemento = complemento;
    if (this.complemento.length > 0) {
      this.complementoValido = true;
    }
  }

  atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento;
    if (this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }
  }

}
