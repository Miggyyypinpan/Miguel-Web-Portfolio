import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '',         loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),         title: 'MVP — Miguel-Vernard Pinpin' },
  { path: 'about',    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),     title: 'About — MVP Portfolio' },
  { path: 'projects', loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent), title: 'Projects — MVP Portfolio' },
  { path: 'resume',   loadComponent: () => import('./pages/resume/resume.component').then(m => m.ResumeComponent),   title: 'Resume — MVP Portfolio' },
  { path: 'contact',  loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent), title: 'Contact — MVP Portfolio' },
  { path: '**',       redirectTo: '' }
];
