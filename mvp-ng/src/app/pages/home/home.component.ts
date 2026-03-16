import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, RevealDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  stats = [
    { label: 'Projects',  target: 3,  value: 0 },
    { label: 'Certs',     target: 15, value: 0 },
    { label: 'Year Exp.', target: 1,  value: 0 }
  ];

  constructor(public p: PortfolioService) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.stats.forEach(stat => {
        let n = 0;
        const inc = Math.max(1, Math.ceil(stat.target / 30));
        const t = setInterval(() => {
          n = Math.min(n + inc, stat.target);
          stat.value = n;
          if (n >= stat.target) clearInterval(t);
        }, 55);
      });
    }, 400);
  }
}
