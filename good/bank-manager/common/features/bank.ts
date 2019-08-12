import { Account } from "../models/account.model";

export class Bank {
  private readonly writeLog: (args: string) => {};

  constructor(writeLog: (args: string) => {}) {
    writeLog = writeLog;
  }

  public Transfer(fromAccount: Account, toAccount: Account, valueTransaction: number): void {
    this.writeLog(`transfer value: ${valueTransaction}`);

    fromAccount.Withdraw(valueTransaction);
    fromAccount.Withdraw(this.LogAndCalculateRates(valueTransaction));
    toAccount.Deposit(valueTransaction);

    this.writeLog(`from details: ${fromAccount}`);
    this.writeLog(`"to details: ${toAccount}`);
  }

  private LogAndCalculateRates(valueTransaction: number): number {
    const rates = this.CalculateRates(valueTransaction);
    this.writeLog(`$tax: ${rates}`);
    return rates;
  }

  protected CalculateRates(valueTransaction: number): number {
    const rates = 0;
    this.writeLog(`$valueTransaction : ${valueTransaction}`);
    this.writeLog(`$rates: ${rates}`);
    return rates
  }
}