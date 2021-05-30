import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackFuturePageRoutingModule } from './back-future-routing.module';

import { BackFuturePage } from './back-future.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackFuturePageRoutingModule
  ],
  declarations: [BackFuturePage]
})
export class BackFuturePageModule {}
