import { ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { EverythingService } from '../services/everything.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit, OnDestroy {
  data: any;
  displayedColumns!: ['userId', 'id', 'title'];

  constructor(private ev: EverythingService) {}
  ngOnDestroy() {
    console.log('on destroy is getting called');
    this.albumList();
  }
  noData: boolean = false;
  ngOnInit(): void {
    console.log('on initi is getting called');
  }

  albumList() {
    this.ev.fetchAlbumData().subscribe((data) => {
      this.data = data;
      if (this.data != null) {
        console.log('data is null');
      }
    });
  }

  popId() {}
}
