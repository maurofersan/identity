import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextService } from '../../../../core/services/text.service';

@Component({
  selector: 'app-biometric-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './biometric-modal.component.html',
  styleUrl: './biometric-modal.component.scss',
})
export class BiometricModalComponent {
  private textService = inject(TextService);

  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() agree = new EventEmitter<void>();

  get modalTitle(): string {
    return this.textService.getText('identity.onboarding.biometricModal.title');
  }

  get modalIntro(): string {
    return this.textService.getText('identity.onboarding.biometricModal.content.intro');
  }

  get modalSubtitle(): string {
    return this.textService.getText('identity.onboarding.biometricModal.content.subtitle');
  }

  get modalPoints(): string[] {
    return this.textService.getText('identity.onboarding.biometricModal.content.points') as any;
  }

  get agreeButtonText(): string {
    return this.textService.getText('identity.onboarding.biometricModal.agreeButton');
  }

  get closeButtonText(): string {
    return this.textService.getText('identity.onboarding.biometricModal.closeButton');
  }

  onClose(): void {
    this.close.emit();
  }

  onAgree(): void {
    this.agree.emit();
  }

  onBackdropClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
}
