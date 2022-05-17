import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  public newSongs: any[] = [];

  public loading: boolean;

  public error: boolean;

  public msgError: string = '';

  constructor(private _spotify: SpotifyService) {
    this.loading = true;

    this.error = false;

    this._spotify.getNewRealeases().subscribe({
      next: (data: any) => {
        this.newSongs = data;

        this.loading = false;
      },
      error: (errorService: any) => {
        console.log(errorService);

        this.loading = false;

        this.msgError = errorService.error.error.message;

        this.error = true;
      },
    });
  }

  ngOnInit(): void {}
}
