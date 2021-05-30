import { DadosService } from './../../service/dados.service';
import { IFilme } from './../models/IFilmes.models';
import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Vídeos APP';
  listaVideos: IFilme[] = [
    {
      nome: 'De Volta para o Futuro',
      lancamento: '1985',
      duracao: '1h 56m',
      classificacao: 83,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/i996T0lI1fGtFEowiH3V6eZthL0.jpg',
      generos: ['Aventura', 'Comédia', 'Ficção científica', 'Família'],
      pagina: "/back-future"
    },
    {
      nome: 'Guerra nas Estrelas',
      lancamento: '17/11/1977',
      duracao: '2h 1m',
      classificacao: 82,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iSNdwFauC1QODm1ntk07wqJV1pf.jpg',
      generos: ['Aventura', 'Ação', 'Ficção científica'],
      pagina: "/star-wars"
    },
    {
      nome: 'Indiana Jones e o Templo da Perdição',
      lancamento: '23/05/1984',
      duracao: '1h 58m',
      classificacao: 73,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/we7AZegHzRAe2sIui4F74dAJ2b.jpg',
      generos: ['Aventura','Ação'],
      pagina: '/indiana-jones'
    }
  ];

  constructor(public alertController: AlertController,
              public toastController: ToastController,
              public dadosService: DadosService,
              public route: Router ) {}

  exibirFilme(filme: IFilme){
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
          }
        }, {
          text: 'SIM, Favoritar!',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }


}
