import { IdGeneratorProvider } from "../providers/idGenerator.provider";

export class Account {
  Id: number;
  Balance: number;

  constructor(balance: number) {
    this.Id = IdGeneratorProvider.Generate();
    this.Balance = balance;

  }

  public Withdraw(valueToDraw: number) {
    this.Balance -= valueToDraw;
  }

  public Deposit(valueToDeposit: number) {
    this.Balance += valueToDeposit;
  }
}