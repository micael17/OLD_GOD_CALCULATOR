declare module 'Calculation' {
  export interface Base {
    supplyValue: number
    vatValue: number
  }

  export interface VatTotal {
    vat: number
    total: number
  }

  export interface LocalNh {
    localValue: number
    nhValue: number
    localVatValue: number
    nhVatValue: number
    xValue: number
  }
}