import { BankType } from "../common/models/bankType.enum";
import { Caixa } from "../features/caixa";
import { Itau } from "../features/itau";
import { Bank } from "../common/features/bank";

export class BankProvider {
  private readonly writeLog: (args: string) => {};

  readonly banks = {
    [BankType.Caixa]: (): Bank => new Caixa(this.writeLog),
    [BankType.Itau]: (): Bank => new Itau(this.writeLog),
  }

  constructor(writeLog: (args: string) => {}) {
    this.writeLog = writeLog;
  }

  public Factory(bankType: BankType): Bank {
    return this.banks[bankType]();
  }
}