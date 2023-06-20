import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SearchComponent } from './pages/search/search.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'rest-api-countries-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    NxWelcomeComponent,
    RouterModule,
    FooterComponent,
    HeaderComponent,
    SearchComponent,
    HttpClientModule,
  ],
})
export class AppComponent {
  title = 'rest-api-countries';
}
