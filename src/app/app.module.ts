import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ViewComponent } from './layout/view/view.component';
import { DatepipeCheckPipe } from './datepipe-check.pipe';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthGuardService } from './auth-guard.service';
import { AlbumsComponent } from './albums/albums.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ViewComponent,
    DatepipeCheckPipe,
    MainComponent,
    AlbumsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,

    // RouterModule.forRoot([
    //   { path: 'login', component: ViewComponent },
    //   {
    //     path: 'main',
    //     component: MainComponent,
    //     canActivate: [AuthGuardService],
    //   }, // only accessible if authorised
    //   { path: 'albums', component: AlbumsComponent },
    //   { path: '**', component: ViewComponent },
    // ]),
  ],
  providers: [
    SocialAuthService,
    AuthGuardService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true, //keeps the user signed in
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '98438617968-rqg24thc8ns3r573mimn4h719t3o9fv8.apps.googleusercontent.com'
            ), // your client id
          },
        ],
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
