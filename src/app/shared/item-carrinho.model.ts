class ItemCarrinhoModel {
  constructor(
     public id: number,
    public img: object,
     public titulo: string,
     public descricao_oferta: string,
     public valor: number,
     public quantidade: number
  ) {}
}

export {ItemCarrinhoModel}
