import * as XLSX from 'xlsx';
import type { incomeTax } from "Etc";


/**
 * 입력한 월 수령액과 부양가족, 자녀수를 받아
 * 부가세액과 지방세를 반환하는 로직
 */async function getResult(income: number = 3000000, familyCnt: number = 1, childCnt: number): Promise<incomeTax> {
    const result: incomeTax = {
        tax: 0,
        localTax: 0,
        totalTax: 0
    }

    const deductionCnt = familyCnt + childCnt

    await fetch('/api/xlsx')
        .then(response => response.arrayBuffer())
        .then(data => {
            // XLSX 파일을 파싱하여 JSON 데이터로 변환
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0]; // 시트 선택
            const sheet = workbook.Sheets[sheetName];
            const Acolumns: number[] = []
            const Bcolumns: number[] = []

            for (const key in sheet) {
                if (key.includes('A') && typeof sheet[key].v === "number") { // A열 값을 받아온다.
                    Acolumns.push(sheet[key].v * 1000);
                }

                if (key.includes('B') && typeof sheet[key].v === "number") { // B열 값을 받아온다.
                    Bcolumns.push(sheet[key].v * 1000);
                }
            }

            if (Acolumns.length !== Bcolumns.length) {
                throw new Error('조견표의 이상/이하 값의 갯수가 다릅니다. 데이터 확인 필요.')
            }

            let idx: number | null = null
            for (let i = 0; i < Acolumns.length; i++) {
                if (income >= Acolumns[i] && income < Bcolumns[i]) {
                    idx = i;
                }
            }

            if(idx) {
                const alphabet = mapNumberToAlphabet(deductionCnt < 1 ? 0 : deductionCnt - 1)
                result.tax = sheet[alphabet + (idx + 2)].v // 첫번째 배열은 제목이니 버리고, idx는 0부터 시작하니 +1 더 추가
                result.localTax = result.tax * 0.1
                result.totalTax = result.tax + result.localTax
            }
        })
        .catch(error => {
            console.error('파일 다운로드 오류:', error);
        });

    return result
}

function mapNumberToAlphabet(number: number): string {
    const numberArray = ['C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']

    if(numberArray[number]) {
        return numberArray[number]
    } else {
        return ''
    }
}
export default {
    getResult
}