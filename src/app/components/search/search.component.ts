import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  public artists: any[] = [];

  public loading: boolean = false;

  constructor(private _spotify: SpotifyService) {}

  search(term: string) {
    if (term) {
      this.loading = true;

      this._spotify.getArtists(term).subscribe((data: any) => {
        this.artists = data;

        this.loading = false;
      });
    }
  }

  ngOnInit(): void {}
}
