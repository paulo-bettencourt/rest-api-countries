import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './models/country';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  countries!: Signal<Country[] | undefined>;

  constructor(private http: HttpClient) {}

  getCountries() {
    return (this.countries = toSignal(
      this.http.get<Country[]>('https://restcountries.com/v3.1/all')
    ));
  }
}
