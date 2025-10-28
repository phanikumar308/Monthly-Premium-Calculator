import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Occupation, OCCUPATIONS } from '../../models/occupation.model';
import { PremiumCalculatorFacade } from '../../services/premium-calculator.facade';

@Component({
  selector: 'app-premium-calculator',
  imports: [CommonModule,ReactiveFormsModule],
  template: './premium-calculator.html',
  styleUrl: './premium-calculator.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PremiumCalculator implements OnInit{ 
  @Output() premiumCalculated = new EventEmitter<number>();

  occupations = OCCUPATIONS;

  // ✅ Declare only, initialize later
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private facade: PremiumCalculatorFacade
  ) {}

  /**
   * ✅ Initialize the form inside ngOnInit()
   * At this point, Angular DI has already provided FormBuilder.
   */
  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      dobMonthYear: ['', Validators.required],
      ageNextBirthday: [null, [Validators.required, Validators.min(1)]],
      occupation: [null as Occupation | null, Validators.required],
      deathSumInsured: [null, [Validators.required, Validators.min(1)]]
    });
  }

  onCalculate(): void {
    if (this.form.valid) {
      const { ageNextBirthday, deathSumInsured, occupation } = this.form.value;
      const premium = this.facade.calculate(
        ageNextBirthday!,
        deathSumInsured!,
        occupation!
      );
      this.premiumCalculated.emit(premium);
    }
  }
  

}
