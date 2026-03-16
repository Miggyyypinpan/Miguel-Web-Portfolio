import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../directives/reveal.directive';
import { PortfolioService, Project } from '../../services/portfolio.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  activeFilter = 'all';
  filters = [
    { label: 'All',        value: 'all'   },
    { label: 'Front-End',  value: 'html'  },
    { label: 'UI/UX',      value: 'figma' }
  ];
  constructor(public p: PortfolioService) {}
  get filtered(): Project[] {
    return this.activeFilter === 'all' ? this.p.projects : this.p.projects.filter(x => x.category === this.activeFilter);
  }
  setFilter(v: string): void { this.activeFilter = v; }
  isAlt(i: number): boolean { return i % 2 !== 0; }
}
