import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  accountProvider: any;
  nav: any;
  menuCtrl: any;
  app: any;
  authService: any;
  constructor() {}

  logout(){
  this.accountProvider.signOut();
  this.nav.serRoot('login.page');
  }

  logoutClicked (){ 
    console.log ("Logout"); 
    this.authService.logout (); 
    this.menuCtrl.close (); 
    var nav = this.app.getRootNav(); 
    nav.setRoot('LoginPage'); 
  } 
}

function logoutClicked() {
  throw new Error('Function not implemented.');
}

function loginpage(loginpage: any) {
  throw new Error('Function not implemented.');
}

