export enum RiceCookerStatus {
  OFF = 'OFF',
  IDLE = 'IDLE',
  COOKING = 'COOKING',
  KEEP_WARM = 'KEEP_WARM',
}

export default class RiceCooker {
  private status: RiceCookerStatus;
  private timerId: number | undefined;

  constructor() {
    this.status = RiceCookerStatus.OFF;
    this.timerId = undefined;
  }

  turnOn(): void {
    if (this.status === RiceCookerStatus.OFF) {
      this.setStatus(RiceCookerStatus.IDLE);
    } else {
      console.log('Rice Cooker is already on.');
    }
  }

  startCooking(): void {
    if (this.status === RiceCookerStatus.IDLE) {
      this.setStatus(RiceCookerStatus.COOKING);
      this.timerId = setTimeout(() => {
        this.setStatus(RiceCookerStatus.KEEP_WARM);
      }, 3000); // Simulating cooking time (3 seconds in this example)
    } else {
      console.log('Rice Cooker is not ready to start cooking.');
    }
  }

  stopCooking(): void {
    if (this.status === RiceCookerStatus.COOKING) {
      clearTimeout(this.timerId);
      this.setStatus(RiceCookerStatus.IDLE);
      console.log('Cooking stopped.');
    } else {
      console.log('Rice Cooker is not currently cooking.');
    }
  }

  turnOff(): void {
    if (this.status !== RiceCookerStatus.OFF) {
      clearTimeout(this.timerId);
      this.setStatus(RiceCookerStatus.OFF);
      console.log('Rice Cooker is now' + RiceCookerStatus.OFF);
    } else {
      console.log('Rice Cooker is already off.');
    }
  }

  private setStatus(newStatus: RiceCookerStatus): void {
    this.status = newStatus;
    console.log(`Rice Cooker is now ${newStatus}`);
  }
}
