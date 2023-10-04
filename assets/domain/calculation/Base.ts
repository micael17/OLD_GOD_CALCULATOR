export default class Base {
  supplyValue: number
  taxValue: number

  constructor(
    supplyValue: number,
    taxValue: number
  ) {
    this.supplyValue = supplyValue
    this.taxValue = taxValue
  }
}