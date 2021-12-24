import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { EverythingService } from 'src/app/services/everything.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  rout: string;
  constructor(
    private router: Router,
    public socialAuthServive: SocialAuthService
  ) {
    this.rout = router.url;
    console.log(this.rout);
  }

  ngOnInit(): void {}

  logout(): void {
    this.socialAuthServive
      .signOut()
      .then(() => this.router.navigate(['login']));
    console.log(localStorage.getItem('this.socialAuthServive.initState'));
    setTimeout(() => {
      console.log('timeout is working'), 1000;
    });
    console.log(navigator.platform);
    // console.log(window.localStorage.setItem('name', 'ritu'));
    console.log(window.localStorage.getItem('name'));
    console.log(window.localStorage.clear());
    //console.log(window.close());
  }
  onSubmit() {
    this.router.navigateByUrl('/albums');
    //  console.log('hi');
  }
}
