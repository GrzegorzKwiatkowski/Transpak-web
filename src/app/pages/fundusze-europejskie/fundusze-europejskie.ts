import { Component } from '@angular/core';
import { EuFunding } from "../../eu-funding/eu-funding";

@Component({
  selector: 'app-fundusze-europejskie',
  standalone: true,
  templateUrl: './fundusze-europejskie.html',
  styleUrls: ['./fundusze-europejskie.css'],
  imports: [EuFunding]
})
export class FunduszeEuropejskie {}
