import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { EuFunding } from "./eu-funding/eu-funding";
import { Home } from './home/home';
import { Body } from './body/body';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, EuFunding, Home, Body, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('transpak-web');
}
