import { Component, State, Listen } from '@stencil/core';

interface Exercise {
  id: number;
  name: string;
}

interface PlanStep {
  exerciseId: number;
  rounds: Round[];
}

interface Round {
  weight: number;
  count: number;
  rest: string;
}

const defaultPlanStep = {
  exerciseId: undefined,
  rounds: [{ weight: 0, count: 0, rest: '00:00:00' }]
} as PlanStep;

@Component({
  tag: 'app-workout-form',
  styleUrl: 'app-workout-form.css'
})
export class AppWorkoutForm {

  exercises: Exercise[] = [
    { id: 1, name: 'Bench Press' },
    { id: 2, name: 'Cable front pull down' },
  ];

  @State() planSteps: PlanStep[] = [defaultPlanStep];

  @Listen('ionChange')
  onBlurHandler(event: Event) {
    console.log('ionChange event', event);
  }

  renderPlanStep = (planStep: PlanStep = {} as PlanStep) => {
    return (
      <div class="plan-step">
        {this.renderExercisesSelect(planStep.exerciseId)}
        {this.renderPlanStepRounds(planStep.rounds)}
      </div>
    )
  }

  renderExercisesSelect(selectedValue: number = undefined) {
    return (
      <ion-select placeholder="Select an exercise" value={selectedValue} okText="Okay" cancelText="Dismiss">
        {this.exercises.map((exercise) => (
          <ion-select-option value={exercise.id}>{exercise.name}</ion-select-option>
        ))}
      </ion-select>
    )
  }

  renderPlanStepRounds(rounds: Round[]) {
    return rounds.map((round, index) => (
      <div class="plan-step-round">
        <ion-item>
          <ion-label>Round {index + 1}</ion-label>
          <ion-icon name="add-circle"></ion-icon>
        </ion-item>
        <ion-item>
          <ion-label>Weight (kg):</ion-label>
          <ion-input clearInput value={String(round.weight)} type="number"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Count:</ion-label>
          <ion-input clearInput value={String(round.count)} type="number"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Time for rest:</ion-label>
          <ion-datetime
            display-format="mm:ss"
            picker-format="mm ss"
            value={round.rest}
            placeholder="Select Time"></ion-datetime>
        </ion-item>
      </div>
    ))
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Create new workout</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        {this.planSteps.map(this.renderPlanStep)}
      </ion-content>
    ];
  }
}
