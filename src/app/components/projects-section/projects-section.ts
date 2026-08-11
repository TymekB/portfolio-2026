import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { I18n } from '../../i18n/i18n';
import { Icon } from '../../shared/icon';
import { ProjectShowcase } from './project-showcase';
import { PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-projects-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, ProjectShowcase],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
})
export class ProjectsSection {
  protected readonly t = inject(I18n).t;
  protected readonly projects = PROJECTS;
}
