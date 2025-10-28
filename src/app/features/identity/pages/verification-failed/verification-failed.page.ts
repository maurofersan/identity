import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../../../shared/base/base.component';
import { TextService } from '../../../../core/services/text.service';
import { TitleSectionComponent } from '../../components/title-section/title-section.component';

@Component({
  selector: 'app-verification-failed-page',
  standalone: true,
  imports: [TitleSectionComponent],
  templateUrl: './verification-failed.page.html',
  styleUrl: './verification-failed.page.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class VerificationFailedPageComponent extends BaseComponent {
  private readonly textService = inject(TextService);
  private readonly router = inject(Router);

  readonly title = this.textService.getTextSignal('identity.failed.title');
  readonly subtitle = this.textService.getTextSignal('identity.failed.subtitle');

  navigateBack(): void {
    this.router.navigate(['/', 'biometria', 'onboarding']);
  }
}


