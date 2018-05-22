import {ItemCarrinhoModel} from './shared/item-carrinho.model';

class CarrinhoService {
  public itens: ItemCarrinhoModel[] = [];

  public exibirItens(): ItemCarrinhoModel [] {
    return this.itens;
  }
}

export default CarrinhoService
