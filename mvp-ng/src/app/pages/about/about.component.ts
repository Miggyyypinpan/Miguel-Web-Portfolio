import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
import { PortfolioService, Certificate } from '../../services/portfolio.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  @ViewChildren('skillBar') skillBars!: QueryList<ElementRef>;
  activeFilter = 'all';
  filterLabels = ['All', 'Simplilearn', 'Cisco', 'HubSpot', 'freeCodeCamp'];

  constructor(public p: PortfolioService) {}

  ngAfterViewInit(): void {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          setTimeout(() => { el.style.width = el.dataset['width'] + '%'; }, 200);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.3 });
    this.skillBars.forEach(r => obs.observe(r.nativeElement));
  }

  setFilter(f: string): void { this.activeFilter = f; }

  get filteredCerts(): Certificate[] {
    if (this.activeFilter === 'all') return this.p.certificates;
    return this.p.certificates.filter(c => c.issuerKey === this.activeFilter);
  }
}
