import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';  
import { EuFunding } from './eu-funding/eu-funding';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'o-nas', component: About },
  { path: 'kontakt', component: Contact },
  {path: 'stopka', component: Footer},
  { path: 'fundusze-eu', component: EuFunding },
  { path: '**', redirectTo: '' }, // fallback na stronę główną
];