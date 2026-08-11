import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  inject,
  input,
  linkedSignal,
  signal,
} from '@angular/core';

import { I18n } from '../../i18n/i18n';
import { Icon } from '../../shared/icon';
import type { ProjectShot } from '../../data/projects';

const SWIPE_THRESHOLD_PX = 40;
const AUTOPLAY_INTERVAL_MS = 5000;

@Component({
  selector: 'app-project-gallery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './project-gallery.html',
  styleUrl: './project-gallery.scss',
})
export class ProjectGallery {
  readonly shots = input.required<readonly ProjectShot[]>();
  readonly projectName = input.required<string>();

  protected readonly t = inject(I18n).t;

  protected readonly index = linkedSignal<readonly ProjectShot[], number>({
    source: this.shots,
    computation: (shots, previous) =>
      previous && previous.value < shots.length ? previous.value : 0,
  });

  protected readonly hasControls = computed(() => this.shots().length > 1);
  protected readonly offset = computed(() => `translateX(-${this.index() * 100}%)`);

  private readonly animated = !matchMedia('(prefers-reduced-motion: reduce)').matches;
  private readonly held = signal(false);
  private timer: ReturnType<typeof setInterval> | null = null;
  private swipeStartX: number | null = null;

  constructor() {
    this.startAutoplay();
    inject(DestroyRef).onDestroy(() => this.stopAutoplay());
  }

  protected caption(shot: ProjectShot): string {
    return this.t().projects.shots[shot.kind];
  }

  protected alt(shot: ProjectShot): string {
    return `${this.projectName()} — ${this.caption(shot)}`;
  }

  protected go(target: number): void {
    this.slideTo(target);
    this.startAutoplay();
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

  private slideTo(target: number): void {
    const total = this.shots().length;
    this.index.set(((target % total) + total) % total);
  }

  private startAutoplay(): void {
    if (!this.animated) {
      return;
    }

    this.stopAutoplay();
    this.timer = setInterval(() => {
      if (this.hasControls() && !this.held()) {
        this.slideTo(this.index() + 1);
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
