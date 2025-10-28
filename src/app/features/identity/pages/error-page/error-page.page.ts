import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../../../shared/base/base.component';
import { TextService } from '../../../../core/services/text.service';
import { TitleSectionComponent } from '../../components/title-section/title-section.component';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [TitleSectionComponent],
  templateUrl: './error-page.page.html',
  styleUrl: './error-page.page.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ErrorPageComponent extends BaseComponent {
  private readonly textService = inject(TextService);
  private readonly router = inject(Router);

  readonly title = this.textService.getTextSignal('identity.error.title');
  readonly subtitle = this.textService.getTextSignal('identity.error.subtitle');

  navigateBack(): void {
    this.router.navigate(['/', 'biometria', 'onboarding']);
  }
}
