import { DadosService } from './../../service/dados.service';
import { Router } from '@angular/router';
import { GeneroService } from './../services/genero.service';
import { FilmeService } from './../services/filme.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Component } from '@angular/core';
import { IFilmeApi } from '../models/IFilmeApi.model';
import { IListaFilmes } from '../models/IListaFilmes.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  titulo = 'Series APP';

  listaFilmes: IListaFilmes;

  generos: string[] = [];

  constructor(public alertController: AlertController,
  public toastController: ToastController,
  public dadosService: DadosService,
  public filmeService: FilmeService,
  public generoService: GeneroService,
  public route: Router) {}

  ngOnInit() {
    this.generoService.buscarGeneros().subscribe(dados => {
      //console.log('Generos: ', dados.genres);
      dados.genres.forEach(genero => {
        this.generos[genero.id] = genero.name;
      });
      this.dadosService.guardarDados('generos', this.generos);
    });
}

buscarFilmes(evento: any) {
  //console.log(evento.target.value);
  const busca = evento.target.value;
  if( busca && busca.trim() !== ''){
    this.filmeService.buscarFilmes(busca, 'tv').subscribe(dados => {
      console.log(dados);
      this.listaFilmes = dados;
    })
  }
}

exibirFilme(filme: IFilmeApi) {
  this.dadosService.guardarDados('serie', filme);
  this.route.navigateByUrl('/dados-serie');
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
