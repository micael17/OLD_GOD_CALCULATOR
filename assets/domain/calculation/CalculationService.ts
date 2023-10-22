import type { Base, LocalNh, VatTotal } from 'Calculation'

interface CalculationService {
  addCommas(input: string): string
  removeCommas(input: string): string
  getSupplyVatFromTotal(totalValue: number): Base
  getVatTotalFromSupply(supplyValue: number): VatTotal
  getLocalNhValue(totalValue:number, supplyValue: number): LocalNh
}

function addCommas(input: string) {
  // 정규 표현식을 사용하여 숫자 형식 유지 및 3자리마다 콤마 추가
  return input.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function removeCommas(input: string) {
  return input.replace(/,/g, '');
}

function getSupplyVatFromTotal(totalValue: number) {
  const vatValue = Math.floor(totalValue * 10 / 110) // 일반적으로 부가세는 원단위 이하 소수점은 버림.
  const supplyValue = totalValue - vatValue // 공급가는 합계급액에서 부가세만 빼면 됨.

  const result:Base = {
    vatValue,
    supplyValue,
  }

  return result
}

function getVatTotalFromSupply(supplyValue: number) {
  const vatRate = 0.1; // 부가세율 (10%)
  const vat = supplyValue * vatRate;
  const total = supplyValue + vat;

  const result: VatTotal = {
    vat,
    total
  }

  return result;
}

function getLocalNhValue(totalValue:number, supplyValue: number) {

  //지역공급가 찾기
  let susValue = 0
  let tmpSusValue = 0
  let xValue = 0
  for(let x = 0; x < supplyValue; x += 10) {
    tmpSusValue = Math.trunc((supplyValue + x) * 0.93)

    if (totalValue - susValue > totalValue - tmpSusValue && tmpSusValue % 10 === 0) {

      if (supplyValue + x > totalValue) {
        susValue = supplyValue + x
        xValue = x
        break;
      }
    } else {
      susValue = tmpSusValue
    }
  }

  const localValue = tmpSusValue
  const localVatValue = Math.trunc(localValue * 1.1)
  const nhValue = susValue
  const nhVatValue = Math.trunc(nhValue * 1.1)
  
  const result: LocalNh = {
    localValue,
    localVatValue,
    nhValue,
    nhVatValue,
    xValue
  }
  return result
}

function getAnnualIncome(monthlyIncome: string) {
  const _monthlyIncome = parseFloat(monthlyIncome)
  let _annualIncome = 0
  let _taxPaid = 0
  let _netIncome = 0

  if (!isNaN(_monthlyIncome)) {
    const annualIncomeValue = _monthlyIncome * 12
    const taxRate = getTaxRate(annualIncomeValue)
    const tax = calculateTax(annualIncomeValue, taxRate)
    const netIncome = annualIncomeValue - tax

    _annualIncome = annualIncomeValue
    _taxPaid = tax
    _netIncome = netIncome
  }

  return {
    annualIncome: _annualIncome,
    taxPaid: _taxPaid,
    netIncome: _netIncome
  }
}

function getTaxRate(income: number): number {
  if (income <= 1200) {
    return 6;
  } else if (income <= 4600) {
    return 15;
  } else if (income <= 8800) {
    return 24;
  } else if (income <= 15000) {
    return 35;
  } else {
    return 38;
  }
}

function calculateTax(income: number, rate: number): number {
  return (income * rate) / 100;
}

export default {
  addCommas,
  removeCommas,
  getSupplyVatFromTotal,
  getVatTotalFromSupply,
  getLocalNhValue,
  getAnnualIncome
} as CalculationService