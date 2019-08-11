import { BankType } from "../models/bankType.enum";
import { Account } from "../models/account.model";

export class BankService {
  public Transfer(bankType: BankType, fromAccount: Account, toAccount: Account, valueTransfer: number) {
    console.log(`transfer value: ${valueTransfer}`);

    fromAccount.Balance = fromAccount.Balance - valueTransfer;
    toAccount.Balance = toAccount.Balance + valueTransfer;

    switch (bankType) {
      case BankType.Caixa:
        fromAccount.Balance = fromAccount.Balance - this.CalcRatesCaixa(valueTransfer);
        break;
      case BankType.Itau:
        fromAccount.Balance = fromAccount.Balance - this.CalcRatesItau(valueTransfer);
        break;

    }
  }

  private CalcRatesItau(valueTransfer: number): number {
    var taxValue = (valueTransfer * 0.10);
    console.log(`Itau tax: ${taxValue} `);
    return taxValue;
  }

  private CalcRatesCaixa(valueTransfer: number): number {
    var taxValue = (valueTransfer * 0.05);
    console.log(`Caixa tax: ${taxValue} `);
    return taxValue;
  }
}