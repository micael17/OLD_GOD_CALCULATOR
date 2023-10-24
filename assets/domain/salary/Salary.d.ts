declare module "Salary" {
    export interface RealMonthlySalary {
        realMonthlySalary: number //월 실수령액
        pensionTax: number // 국민연금
        healthTax: number // 건강보험
        careTax: number // 장기요양
        employmentTax: number // 고용보험
        incomeTax: number // 소득세
        localIncomeTax: number // 지방소득세
    }

    export interface IncomeTax {
        incomeTax: number // 소득세
        localIncomeTax: number //지방소득세
    }

    export interface InputSalary {
        monthlySalary: number
        deductionAmount?: number
        familyCnt: number
        childCnt: number
    }
}