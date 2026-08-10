import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';

import { I18n } from '../../i18n/i18n';
import { Icon } from '../../shared/icon';
import { PROJECTS } from '../../data/projects';

type Filter = 'featured' | 'all';

@Component({
  selector: 'app-projects-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
})
export class ProjectsSection {
  protected readonly t = inject(I18n).t;
  protected readonly filter = signal<Filter>('featured');

  protected readonly filters = computed<readonly { value: Filter; label: string }[]>(() => [
    { value: 'featured', label: this.t().projects.filterFeatured },
    { value: 'all', label: `${this.t().projects.filterAll} (${PROJECTS.length})` },
  ]);

  protected readonly visibleProjects = computed(() =>
    this.filter() === 'all' ? PROJECTS : PROJECTS.filter((project) => project.featured),
  );

  protected select(filter: Filter): void {
    this.filter.set(filter);
  }
}
