import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { AuthGuardService } from '../../auth-guard.service';
import { AlbumsComponent } from './albums/albums.component';
import { ViewComponent } from './layout/view/view.component';

const routes: Routes = [
  { path: 'login', component: ViewComponent },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuardService],
  }, // only accessible if authorised
  { path: 'albums', component: AlbumsComponent },
  { path: '**', component: ViewComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
