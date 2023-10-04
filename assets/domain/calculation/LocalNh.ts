export default class LocalNh {
  localValue: number
  nhValue: number
  localTaxValue: number
  nhTaxValue: number
  xValue: number

  constructor(
    localValue: number,
    nhValue: number,
    localTaxValue: number,
    nhTaxValue: number,
    xValue: number
  ) {
    this.localValue = localValue;
    this.nhValue = nhValue;
    this.localTaxValue = localTaxValue;
    this.nhTaxValue = nhTaxValue;
    this.xValue = xValue
  }
}