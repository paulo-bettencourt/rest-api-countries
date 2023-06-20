import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './models/country';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, filter, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  countries$!: Observable<Country[] | undefined>;
  countriesSignal = signal<Country[] | undefined>(undefined);

  constructor(private http: HttpClient) {}

  getCountries() {
    this.countries$ = this.http.get<Country[] | undefined>(
      'https://restcountries.com/v3.1/all'
    );
    const signalOfCountries = toSignal(this.countries$);
    this.countriesSignal.set(signalOfCountries());
    return signalOfCountries;
  }

  getCountryFromInput(country: string) {
    const countryToBeSearched = country;
    this.http
      .get<Country[]>('https://restcountries.com/v3.1/all')
      .pipe(
        map((countries: Country[]) =>
          countries.filter((countryItem: Country) => {
            countryItem.name.common.toLowerCase() ===
              countryToBeSearched.toLowerCase();
          })
        )
      )
      .subscribe((data) => {
        console.log('DATAA ', data);
        this.countriesSignal.set(data);
      });
    /*     const signalOfCountries = toSignal(this.countries$);
    this.countriesSignal.set(signalOfCountries()); */
    return this.countriesSignal;
  }
}
