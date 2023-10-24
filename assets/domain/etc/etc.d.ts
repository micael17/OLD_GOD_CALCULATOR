declare module "Etc" {
    export interface incomeTax {
        tax: number // 소득세
        localTax: number //지방소득세
        totalTax: number //합계 (납부세액의 합계액)
    }
}