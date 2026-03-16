import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="navbar" [class.scrolled]="scrolled">
      <div class="nav-inner">
        <a routerLink="/" class="nav-logo" aria-label="Home">
          <img
            src="assets/logo-mark-white.png"
            alt="MVP — Miguel-Vernard Pinpin"
            class="nav-logo-img"
          />
        </a>

        <ul class="nav-links" [class.open]="menuOpen">
          <li *ngFor="let link of navLinks">
            <a
              [routerLink]="link.path"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: link.path === '/' }"
              (click)="closeMenu()"
            >{{ link.label }}</a>
          </li>
        </ul>

        <button
          class="hamburger"
          [class.open]="menuOpen"
          (click)="toggleMenu()"
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  scrolled = false;
  menuOpen = false;

  navLinks = [
    { path: '/',         label: 'Home'     },
    { path: '/about',    label: 'About'    },
    { path: '/projects', label: 'Projects' },
    { path: '/resume',   label: 'Resume'   },
    { path: '/contact',  label: 'Contact'  }
  ];

  ngOnInit(): void { this.scrolled = window.scrollY > 20; }

  @HostListener('window:scroll')
  onScroll(): void { this.scrolled = window.scrollY > 20; }

  toggleMenu(): void { this.menuOpen = !this.menuOpen; }
  closeMenu():  void { this.menuOpen = false; }
}
