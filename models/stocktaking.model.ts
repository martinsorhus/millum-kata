export class Stocktaking {
  period: number;
  year: number;
  id: string;

  constructor(o?: Partial<Stocktaking>) {
    if (o) Object.assign(this, o);
  }
}

export enum PeriodType {
  WEEKLY = 1,
  MONTHLY = 2,
  QUARTERLY = 3,
  YEARLY = 4,
}
