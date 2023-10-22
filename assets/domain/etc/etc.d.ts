declare module "Etc" {
    export interface xml2json {
        tax: string // 소득세
        localTax: string //지방소득세
        totalTax: string //합계 (납부세액의 합계액)
    }
}