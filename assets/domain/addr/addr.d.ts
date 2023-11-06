declare module 'Addr' {

    interface Common {
        totalCount: string
        currentPage: number
        countPerPage: number
        errorCode: string
        errorMessage: string
    }

    interface Juso {
        roadAddr: string // 영문 도로명 주소
        jibunAddr: string // 영문 지번 주소
        zipNo: string // 우편번호
        korAddr: string // 한글 주소
    }

    export interface AddrResult {
        common: Common | null,
        juso: Juso[] | null
    }
}