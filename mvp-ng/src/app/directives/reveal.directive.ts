import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: '[appReveal]', standalone: true })
export class RevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const el = this.el.nativeElement as HTMLElement;
    el.classList.add('reveal');
    if (this.revealDelay) {
      el.style.transitionDelay = `${this.revealDelay}s`;
    }

    this.observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          el.classList.add('visible');
          this.observer.unobserve(el);
        }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -28px 0px' }
    );
    this.observer.observe(el);
  }

  ngOnDestroy(): void { this.observer?.disconnect(); }
}
