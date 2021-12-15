import { Component, OnInit } from '@angular/core';
import { EverythingService } from '../services/everything.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  data: any;
  displayedColumns!: ['userId', 'id', 'title'];

  constructor(private ev: EverythingService) {}
  noData: boolean = false;
  ngOnInit(): void {}
  albumList() {
    this.ev.fetchAlbumData().subscribe((data) => {
      this.data = data;
    });
  }
}
