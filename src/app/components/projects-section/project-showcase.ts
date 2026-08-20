import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  computed,
  effect,
  inject,
  input,
  linkedSignal,
  signal,
  viewChild,
  viewChildren,
} from '@angular/core';

import { I18n } from '../../i18n/i18n';
import { Icon } from '../../shared/icon';
import { TechLogoIcon, techLogoForTag } from '../../shared/tech-logo';
import type { Project, ProjectShot } from '../../data/projects';
import type { TechLogo } from '../../data/tech-logos';

const SWIPE_THRESHOLD_PX = 40;
const AUTOPLAY_INTERVAL_MS = 6000;

@Component({
  selector: 'app-project-showcase',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, TechLogoIcon],
  templateUrl: './project-showcase.html',
  styleUrl: './project-showcase.scss',
})
export class ProjectShowcase {
  readonly projects = input.required<readonly Project[]>();

  protected readonly t = inject(I18n).t;

  protected readonly index = linkedSignal<readonly Project[], number>({
    source: this.projects,
    computation: (projects, previous) =>
      previous && previous.value < projects.length ? previous.value : 0,
  });

  protected readonly current = computed(() => this.projects()[this.index()]);
  protected readonly hasControls = computed(() => this.projects().length > 1);
  protected readonly offset = computed(() => `translateX(-${this.index() * 100}%)`);
  protected readonly paused = signal(false);

  protected readonly shotIndex = linkedSignal<Project, number>({
    source: this.current,
    computation: () => 0,
  });

  protected readonly currentShot = computed<ProjectShot | null>(
    () => this.current().shots[this.shotIndex()] ?? null,
  );

  private readonly rail = viewChild<ElementRef<HTMLElement>>('rail');
  private readonly railItems = viewChildren<ElementRef<HTMLElement>>('railItem');

  private readonly animated = !matchMedia('(prefers-reduced-motion: reduce)').matches;
  private readonly held = signal(false);
  private timer: ReturnType<typeof setInterval> | null = null;
  private swipeStartX: number | null = null;

  protected readonly canAutoplay = computed(() => this.animated && this.hasControls());

  constructor() {
    this.startAutoplay();
    inject(DestroyRef).onDestroy(() => this.stopAutoplay());

    effect(() => this.revealInRail(this.index()));
  }

  protected tagline(project: Project): string {
    return this.t().projects.items[project.id].tagline;
  }

  protected techLogo(tag: string): TechLogo | null {
    return techLogoForTag(tag);
  }

  protected caption(shot: ProjectShot): string {
    return this.t().projects.shots[shot.kind];
  }

  protected alt(project: Project, shot: ProjectShot): string {
    return `${project.name} — ${this.caption(shot)}`;
  }

  protected slideShot(project: Project, slide: number): ProjectShot | null {
    if (slide === this.index()) {
      return this.currentShot();
    }

    return project.shots[0] ?? null;
  }

  protected go(target: number): void {
    const total = this.projects().length;
    this.index.set(((target % total) + total) % total);
    this.startAutoplay();
  }

  protected showShot(shot: number): void {
    this.shotIndex.set(shot);
    this.startAutoplay();
  }

  protected togglePlayback(): void {
    this.paused.update((paused) => !paused);
  }

  protected hold(holding: boolean): void {
    this.held.set(holding);
  }

  protected onSwipeStart(event: PointerEvent): void {
    this.swipeStartX = event.pointerType === 'mouse' ? null : event.clientX;
  }

  protected onSwipeCancel(): void {
    this.swipeStartX = null;
  }

  protected onSwipeEnd(event: PointerEvent): void {
    if (this.swipeStartX === null) {
      return;
    }

    const distance = event.clientX - this.swipeStartX;
    this.swipeStartX = null;

    if (Math.abs(distance) < SWIPE_THRESHOLD_PX) {
      return;
    }

    this.go(this.index() + (distance < 0 ? 1 : -1));
  }

  private revealInRail(slide: number): void {
    const rail = this.rail()?.nativeElement;
    const item = this.railItems()[slide]?.nativeElement;

    if (!rail || !item || rail.scrollWidth <= rail.clientWidth) {
      return;
    }

    rail.scrollTo({
      left: item.offsetLeft - (rail.clientWidth - item.clientWidth) / 2,
      behavior: this.animated ? 'smooth' : 'auto',
    });
  }

  private startAutoplay(): void {
    if (!this.animated) {
      return;
    }

    this.stopAutoplay();
    this.timer = setInterval(() => {
      if (this.hasControls() && !this.held() && !this.paused()) {
        const total = this.projects().length;
        this.index.set((this.index() + 1) % total);
      }
    }, AUTOPLAY_INTERVAL_MS);
  }

  private stopAutoplay(): void {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}
