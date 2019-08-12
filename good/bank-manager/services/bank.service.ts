import { BankProvider } from "../providers/bank.provider";
import { Account } from "../common/models/account.model";
import { BankType } from "../common/models/bankType.enum";

export class BankService {
  private readonly bankProvider: BankProvider;

  constructor(bankProvider: BankProvider) {
    this.bankProvider = bankProvider;
  }

  public Transfer(bankType: BankType, accountFrom: Account, accountTo: Account, valueTransfer: number): void {
    this.bankProvider
      .Factory(bankType)
      .Transfer(accountFrom, accountTo, valueTransfer);
  }
}