import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { fadeInAnimation } from '../animation';

@Component({
  selector: 'app-national-parks',
  templateUrl: './national-parks.component.html',
  styleUrls: ['./national-parks.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class NationalParksComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }

  readonly npsURL = 'https://developer.nps.gov/api/v1/parks?';
  readonly visitedParks = ['bibe', 'yell', 'gumo'];
  readonly parkCode = 'parkcode=' + this.visitedParks.toString();
  readonly apiKeyPrepend = '&api_key=';
  parkData: any = [];
  isLoading = false;

  ngOnInit() {
    this.getParkData();
  }

  getParkData() {
    this.isLoading = true;

    this.httpClient.get<any>(this.npsURL + this.parkCode + this.apiKeyPrepend + environment.npsKey).subscribe({
      next: (response) => {
        this.parkData = response.data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error occured', error);
      }
      }
    );
  }
}
