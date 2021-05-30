import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackFuturePage } from './back-future.page';

const routes: Routes = [
  {
    path: '',
    component: BackFuturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackFuturePageRoutingModule {}
