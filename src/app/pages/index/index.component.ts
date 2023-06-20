import { Component, OnInit, Signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'rest-api-countries-index',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ApiService],
})
export class IndexComponent {
  countries: Signal<Country[] | undefined>;

  constructor(private apiService: ApiService) {
    this.countries = this.apiService.getCountries();
  }
}
