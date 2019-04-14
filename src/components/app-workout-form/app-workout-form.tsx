import { Component } from '@stencil/core';

@Component({
  tag: 'app-workout-form',
  styleUrl: 'app-workout-form.css'
})
export class AppWorkoutForm {

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Create new workout</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <div class="exercise">
          <ion-select value="Bench Press" okText="Okay" cancelText="Dismiss">
            <ion-select-option value="Bench Press">Bench Press</ion-select-option>
            <ion-select-option value="Cable front pull down">Cable front pull down</ion-select-option>
          </ion-select>
          <ion-item><ion-label>Round 1</ion-label></ion-item>
          <ion-item>
            <ion-label>Weight (kg):</ion-label>
            <ion-input clearInput value="0" type="number"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Time for rest:</ion-label>
            <ion-datetime
              display-format="mm:ss"
              picker-format="mm ss"
              value="00:01:15"
              placeholder="Select Time"></ion-datetime>
          </ion-item>
        </div>
      </ion-content>
    ];
  }
}
