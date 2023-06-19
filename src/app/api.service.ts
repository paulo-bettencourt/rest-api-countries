import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './models/country';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get<Country[]>('https://restcountries.com/v3.1/all');
  }
}
