import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EverythingService {
  album = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private httpClient: HttpClient) {}
  fetchAlbumData() {
    return this.httpClient.get(this.album);
  }
}
