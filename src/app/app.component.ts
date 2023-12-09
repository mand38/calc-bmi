// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  weight: number = 0; // 体重
  height: number = 0; // 身長
  bmiResult: number | null = null; // BMI 結果
  appropriateWeight: number = 0;

  calculateBMI(): void {
    if (this.weight > 0 && this.height > 0) {
      const heightInMeter = this.height / 100;
      this.bmiResult = this.weight / (heightInMeter * heightInMeter);
      this.appropriateWeight = (heightInMeter * heightInMeter) * 22;
    } else {
      this.bmiResult = null;
    }
  }

  getBMICategory(): string {
    if (this.bmiResult !== null) {
      if (this.bmiResult < 18.5) {
        return 'Underweight';
      } else if (this.bmiResult < 24.9) {
        return 'Normal weight';
      } else if (this.bmiResult < 29.9) {
        return 'Overweight';
      } else {
        return 'Obese';
      }
    } else {
      return '';
    }
  }
}
