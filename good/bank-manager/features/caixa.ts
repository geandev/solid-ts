import { Bank } from "../common/features/bank";

export class Caixa extends Bank {
  constructor(writeLog: (args: string) => {}) {
    super(writeLog)
  }

  protected CalculateRates(valueTransaction: number): number {
    return valueTransaction * 0.05;
  }
}