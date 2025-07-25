import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";


@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('transpak-web');
}
