import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;

  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa // Retorno de Ofertas []
    .debounceTime(1000) // Executa a ação do Switchmap apos um segundo
    .distinctUntilChanged()
    .switchMap((termo: string) => {
      console.log('Requisição HTTP Man');
      if (termo.trim() === '') {
        return Observable.of<Oferta[]>([]);
      }
      return this.ofertasService.pesquisaOfertas(termo);
    })
    .catch((err: any) => {
      console.log(err);
      return Observable.of<Oferta[]>([]);
    });

    this.ofertas.subscribe((ofertas: Oferta []) => console.log(ofertas));
  }

  public pesquisa(termoDaBusca: string): void {
    console.log('KeyUp Man', termoDaBusca);
    this.subjectPesquisa.next(termoDaBusca);
  }

}
