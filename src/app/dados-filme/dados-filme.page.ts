import { IFilmeApi } from './../models/IFilmeApi.model';
import { DadosService } from './../../service/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-filme',
  templateUrl: './dados-filme.page.html',
  styleUrls: ['./dados-filme.page.scss'],
})
export class DadosFilmePage implements OnInit {

  filme: IFilmeApi;

  generos: string[] = [];

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.filme = this.dadosService.obterDados('filme');
    this.generos = this.dadosService.obterDados('generos');
    console.log('Filme Enviado', this.filme);
  }

}
