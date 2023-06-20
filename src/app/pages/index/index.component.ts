import { Component, OnInit } from '@angular/core';
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
  arrayCountries: Country[] = [];
  filteredArrayCountries: any;

  constructor(private apiService: ApiService) {
    this.apiService.getCountries().subscribe({
      next: (countries: Country[]) => {
        (this.arrayCountries = countries),
          (this.filteredArrayCountries = this.arrayCountries);
      },
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredArrayCountries = this.arrayCountries;
      return;
    }

    this.filteredArrayCountries = this.arrayCountries.filter((country) =>
      country?.name.common.toLowerCase().includes(text.toLowerCase())
    );
  }
}
