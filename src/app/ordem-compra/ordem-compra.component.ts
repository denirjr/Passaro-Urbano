import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra: number;

  //Pedido
  public pedido: Pedido = new Pedido('', '', '', '');

  public endereco = '';
  public numero = '';
  public complemento = '';
  public formaDePagamento = '';

  //controles de validação dos campos
  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaPagamentoValido: boolean;

  //estados primitivos dos campos (pristine)
  public enderecoEstadoPrimitivo = true;
  public numeroEstadoPrimitivo = true;
  public complementoEstadoPrimitivo = true;
  public formaPagamentoEstadoPrimitivo = true;

  //controlar botão confirmar compra
  public formEstado = 'disabled';

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    //this.ordemCompraService.efetivarCompra()
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco;
    //console.log(this.endereco)

    this.enderecoEstadoPrimitivo = false;

    //se a string for maior que 3
    if (this.endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }

    this.habilitaForm();
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero;
    //console.log(this.numero)

    this.numeroEstadoPrimitivo = false;

    if (this.numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }

    this.habilitaForm();
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento;
    //console.log(this.complemento)

    this.complementoEstadoPrimitivo = false;

    if (this.complemento.length > 0) {
      this.complementoValido = true;
    }

    this.habilitaForm();
  }

  public atualizaFormaPagamento(formaDePagamento: string): void {
    this.formaDePagamento = formaDePagamento;
    console.log(this.formaDePagamento);

    this.formaPagamentoEstadoPrimitivo = false;

    if (this.formaDePagamento.length > 0) {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }

    this.habilitaForm();
  }

  public habilitaForm(): void {
    if (this.enderecoValido === true && this.numeroValido === true && this.formaPagamentoValido === true) {
      this.formEstado = '';
    } else {
      this.formEstado = 'disabled';
    }
  }

  public confirmarCompra(): void {

    this.pedido.endereco = this.endereco;
    this.pedido.numero = this.numero;
    this.pedido.complemento = this.complemento;
    this.pedido.formaPagamento = this.formaDePagamento;

    this.ordemCompraService.efetivarCompra(this.pedido)
      .subscribe((idPedido: number) => {
       this.idPedidoCompra = idPedido;
      });
  }

}
