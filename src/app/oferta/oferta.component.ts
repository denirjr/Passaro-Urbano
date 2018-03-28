import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then(( oferta: Oferta ) => {
        this.oferta = oferta;
        //console.log(this.oferta)
      });
    // this.route.params.subscribe(
    //   (parametro: any) => { console.log(parametro) },
    //     (erro: any) => console.log(erro),
    //   () => console.log('Processamento concluido');
    //
    // })

    // let tempo = Observable.interval(2000);
    // tempo.subscribe((intervalo: number) => {
    //   console.log(intervalo);
    // });

    let meuObservableTeste = Observable.create((observer: Observer<string>) => {
      observer.next('Primeiro Evento da Stream');
    });

    meuObservableTeste.subscribe(
      (resultado: any) => console.log(resultado)

    );
  }
}
