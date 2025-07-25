import { Component } from '@angular/core';
import { Body } from '../body/body';
import { Contact } from '../contact/contact';
import { EuFunding } from '../eu-funding/eu-funding';
import { Hero } from "../hero/hero";
import { WhyWe } from "../why-we/why-we";
import { Steps } from "../steps/steps";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EuFunding, Body, Contact, Hero, WhyWe, Steps],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
