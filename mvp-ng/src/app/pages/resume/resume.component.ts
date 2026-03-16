import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../directives/reveal.directive';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  languages = [
    { name: 'Filipino', level: 'Native', cls: 'native' },
    { name: 'English',  level: 'Fluent',  cls: 'fluent'  }
  ];
  constructor(public p: PortfolioService) {}
}
