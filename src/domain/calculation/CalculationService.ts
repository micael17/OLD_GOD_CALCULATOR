import LocalNh from '@/domain/calculation/LocalNh'
import Base from '@/domain/calculation/Base'

interface CalculationService {
  getSupplyTaxValue(totalValue: number): Base
  getLocalNhValue(totalValue:number, supplyValue: number): LocalNh
}

function getSupplyTaxValue(totalValue: number) {
  const taxValue = Math.floor(totalValue * 10 / 110) // 일반적으로 부가세는 원단위 이하 소수점은 버림.
  const supplyValue = totalValue - taxValue // 공급가는 합계급액에서 부가세만 빼면 됨.

  const result:Base = {
    taxValue,
    supplyValue,
  }

  return result
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
  const localTaxValue = Math.trunc(localValue * 1.1)
  const nhValue = susValue
  const nhTaxValue = Math.trunc(nhValue * 1.1)
  
  const result: LocalNh = {
    localValue,
    localTaxValue,
    nhValue,
    nhTaxValue,
    xValue
  }
  return result
}

export default {
  getSupplyTaxValue,
  getLocalNhValue
} as CalculationService