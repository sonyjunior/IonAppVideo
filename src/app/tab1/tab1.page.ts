import { GeneroService } from './../services/genero.service';
import { FilmeService } from './../services/filme.service';
import { DadosService } from './../../service/dados.service';
import { IFilme } from './../models/IFilme.models';
import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IFilmeApi } from '../models/IFilmeApi.model';
import { IListaFilmes } from '../models/IListaFilmes.model';
import { IGenero } from '../models/IGenero.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})

export class Tab1Page implements OnInit {

  titulo = 'Filmes APP';

  listaFilmes: IListaFilmes;

  generos: string[] = [];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public generoService: GeneroService,
    public route: Router
  ) {}

  ngOnInit() {
      this.generoService.buscarGeneros().subscribe(dados => {
        console.log('Generos: ', dados.genres);
        dados.genres.forEach(genero => {
          this.generos[genero.id] = genero.name;
        });
        this.dadosService.guardarDados('generos', this.generos);
      });
  }

  buscarFilmes(evento: any) {
    console.log(evento.target.value);
    const busca = evento.target.value;
    if( busca && busca.trim() !== ''){
      this.filmeService.buscarFilmes(busca, 'movie').subscribe(dados => {
        console.log(dados);
        this.listaFilmes = dados;
      })
    }
  }

  exibirFilme(filme: IFilmeApi) {
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta !',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'SIM, Favoritar!',
          handler: () => {
            this.apresentarToast();
          },
        },
      ],
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }
}
