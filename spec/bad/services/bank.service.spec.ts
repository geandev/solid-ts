import { BankService } from "../../../bad/services/bank.service"
import { BankType } from "../../../bad/models/bankType.enum"
import { Account } from "../../../bad/models/account.model"

describe("BankService", () => {

  let service: BankService

  beforeEach(() => {
    service = new BankService()
  })

  it('should create a instance', () => {
    expect(service).toBeTruthy()
  })

  it('Transfer should transfer from account to another account', () => {

    const fromAccount = { Id: 1, Balance: 200 } as Account
    const toAccount = { Id: 1, Balance: 100 } as Account

    service.Transfer(BankType.Caixa, fromAccount, toAccount, 100)

    expect(fromAccount.Balance).toBe(95)
    expect(toAccount.Balance).toBe(200)
  })
})