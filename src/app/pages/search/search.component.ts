import { Component, Signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'rest-api-countries-search',
  standalone: true,
  imports: [CommonModule],
  providers: [ApiService],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  inputCountry!: any;

  constructor(private apiService: ApiService) {}

  getCountryInput(event: Event): string {
    const country = (event.target as HTMLInputElement).value;
    console.log('country: ', country);
    return (event.target as HTMLInputElement).value;
  }
}
