import {ItemCarrinhoModel} from './shared/item-carrinho.model';
import {Oferta} from './shared/oferta.model';

class CarrinhoService {
  public itens: ItemCarrinhoModel[] = [];

  public exibirItens(): ItemCarrinhoModel [] {
    return this.itens;
  }

  public incluirItem(oferta: Oferta): void {
    let itemCarrinho: ItemCarrinhoModel = new ItemCarrinhoModel(
      oferta.id,
      oferta.imagens[0],
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor,
      1
    );
    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinhoModel) => item.id === itemCarrinho.id);
    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade += 1;
    } else {
      this.itens.push(itemCarrinho);
    }
  }

  public totalCarrinhoCompras(): number {
    let total = 0;
    this.itens.map((item: ItemCarrinhoModel) => {
      total = total + (item.valor * item.quantidade);
    });
    return total;
  }

  public adicionarQuantidade (itemCarrinho: ItemCarrinhoModel): void {
    const itemCarrinhoEncontrado = this.itens.find((item) => item.id === itemCarrinho.id );

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade += 1;
    }
  }

  public diminuirQuantidade(itemCarrinho: ItemCarrinhoModel): void {
    const itemCarrinhoEncontrado = this.itens.find((item) => item.id === itemCarrinho.id );

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade -= 1;

      if (itemCarrinhoEncontrado.quantidade === 0) {
          this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado), 1);
      }
    }
  }

}

export { CarrinhoService };
