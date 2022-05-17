import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [],
})
export class ArtistComponent {
  public artist: any = {};

  public topTracks: any[] = [];

  public loading: boolean = false;

  constructor(
    private _router: ActivatedRoute,
    private _spotify: SpotifyService
  ) {
    this._router.params.subscribe((params) => {
      this.getArtist(params['id']);

      this.getTopTracks(params['id']);
    });
  }

  getArtist(id: string) {
    this.loading = true;

    this._spotify.getArtist(id).subscribe((artist: any) => {
      this.artist = artist;

      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.loading = true;

    this._spotify.getTopTracks(id).subscribe((tracks: any) => {
      this.topTracks = tracks;

      this.loading = false;
    });
  }
}
