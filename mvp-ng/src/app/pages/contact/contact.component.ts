import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RevealDirective } from '../../directives/reveal.directive';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form: FormGroup;
  sending     = false;
  submitted   = false;
  showSuccess = false;

  contactItems = [
    { icon: '✉', key: 'Email',    val: 'miggypin1218@gmail.com', href: 'mailto:miggypin1218@gmail.com' },
    { icon: '📞', key: 'Phone',   val: '09 976 212 0086',        href: 'tel:+639976212086' },
    { icon: '📍', key: 'Location',val: 'Angeles, Pampanga, PH',  href: null },
    { icon: '🎓', key: 'School',  val: 'Holy Angel University',  href: null }
  ];

  socialLinks = [
    { label: 'LinkedIn',     url: 'https://www.linkedin.com/in/miguel-pinpin-34b436316/', icon: 'linkedin' },
    { label: 'GitHub — Miggyyypinpan', url: 'https://github.com/Miggyyypinpan?tab=repositories', icon: 'github' },
    { label: 'freeCodeCamp — miggyyypinpan', url: 'https://www.freecodecamp.org/miggyyypinpan', icon: 'fcc' }
  ];

  constructor(private fb: FormBuilder, public p: PortfolioService) {
    this.form = this.fb.group({
      name:    ['', [Validators.required, Validators.minLength(2)]],
      email:   ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() { return this.form.controls; }

  isInvalid(field: string): boolean {
    const c = this.f[field];
    return (this.submitted || c.touched) && c.invalid;
  }

  getError(field: string): string {
    const e = this.f[field].errors;
    if (!e) return '';
    if (e['required'])  return 'This field is required.';
    if (e['email'])     return 'Please enter a valid email address.';
    if (e['minlength']) return `Minimum ${e['minlength'].requiredLength} characters.`;
    return '';
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) return;
    this.sending = true;
    setTimeout(() => {
      this.sending = false;
      this.showSuccess = true;
      this.form.reset();
      this.submitted = false;
      setTimeout(() => this.showSuccess = false, 5000);
    }, 1700);
  }

  svgPath(icon: string): string {
    const paths: Record<string, string> = {
      linkedin: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7H10v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 100 4 2 2 0 000-4z',
      github:   'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
      fcc:      'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z'
    };
    return paths[icon] ?? '';
  }
}
