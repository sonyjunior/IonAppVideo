import { Component, OnInit } from '@angular/core';
import { DadosService } from '../../service/dados.service';
import { IFilmeApi } from '../models/IFilmeApi.model';

@Component({
  selector: 'app-dados-serie',
  templateUrl: './dados-serie.page.html',
  styleUrls: ['./dados-serie.page.scss'],
})
export class DadosSeriePage implements OnInit {

  filme: IFilmeApi;

  generos: string[] = [];

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.filme = this.dadosService.obterDados('serie');
    this.generos = this.dadosService.obterDados('generos');
    console.log('Serie Enviada', this.filme);
  }

}
