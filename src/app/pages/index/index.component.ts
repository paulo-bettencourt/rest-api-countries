import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'rest-api-countries-index',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ApiService],
})
export class IndexComponent {
  arrayCountries: any;

  constructor(private apiService: ApiService) {
    this.apiService.getConfig().subscribe({
      next: (data: any) => (this.arrayCountries = data),
    });
  }
}
