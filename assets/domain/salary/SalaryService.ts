import type {RealMonthlySalary, IncomeTax, InputSalary} from "Salary";

interface SalaryService {
    getRealSalary({monthlySalary, deductionAmount, familyCnt, childCnt}: InputSalary): Promise<RealMonthlySalary>
}

/**
 * 1. 연봉 또는 월급을 입력하도록 한다.
 *
 * 1-1 월급 계산기 기준.
 * 1-2 월급, 비과세액, 부양가족수, 8세이상 20세이하 자녀수를 입력 받는다.
 * 1-3 세금을 계산하고 보여줌 (국민연급, 건강보험, 장기요양, 고용보험, 소득세, 지방소득세)
 * 1-4 공제액 합계와 각 세금을 보여주고. 입력한 월급에서 공제액을 땐 예상 실수령액(월)을 반환한다.
 */
async function getRealSalary({monthlySalary, deductionAmount = 0, familyCnt = 1, childCnt = 0}: InputSalary): Promise<RealMonthlySalary> {
    const { incomeTax, localIncomeTax } = await getSalaryTaxFromXlsx({
        monthlySalary: monthlySalary - deductionAmount,
        familyCnt,
        childCnt
    })

    const pensionTax = calculatePension(monthlySalary)
    const healthTax = calculateHealthInsurance(monthlySalary)
    const careTax = calculateLongTermCare(healthTax)
    const employmentTax = calculateEmploymentInsurance(monthlySalary)
    const totalTax = incomeTax + localIncomeTax + pensionTax + healthTax + careTax + employmentTax
    const realMonthlySalary = monthlySalary - totalTax

    return {
        pensionTax, healthTax, careTax, employmentTax, incomeTax, localIncomeTax, realMonthlySalary
    }
}

async function getSalaryTaxFromXlsx({monthlySalary, familyCnt, childCnt}: InputSalary): Promise<IncomeTax> {
    const result: IncomeTax = {
        incomeTax: 0,
        localIncomeTax: 0,
    }

    const deductionCnt = familyCnt + childCnt

    await fetch('/2023.xlsx')
        .then((response) => response.arrayBuffer())
        .then( async (arrayBuffer) => {
            //XLSX를 들고 있으면 SSG 빌드시 에러가 나서, 사용할 때 dynamic import 하는걸로 바꿨더니 잘됨
            //@ts-ignore
            const XLSX = await import("https://cdn.sheetjs.com/xlsx-0.20.0/package/xlsx.mjs")
            const workbook = XLSX.read(arrayBuffer, { type: 'array' });
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
                if (monthlySalary >= Acolumns[i] && monthlySalary < Bcolumns[i]) {
                    idx = i;
                }
            }

            if(idx) {
                const numberArray = ['C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']
                const alphabet = numberArray[deductionCnt < 1 ? 0 : deductionCnt - 1] || 'M'
                result.incomeTax = sheet[alphabet + (idx + 2)].v // 첫번째 배열은 제목이니 버리고, idx는 0부터 시작하니 +1 더 추가
                result.localIncomeTax = result.incomeTax * 0.1
            }
        })
        .catch(error => {
            console.error('파일 다운로드 오류:', error);
        })

    return result
}

function calculatePension(monthlySalary: number) {
    const pensionRate = 0.045; // 4.5%의 연금율
    const minPension = 370000; // 최저 국민연금액
    const maxPension = 5900000; // 최고 국민연금액

    // 연금 계산
    let pension = monthlySalary * pensionRate;

    // 최소 및 최대 연금 액수 적용
    /*if (pension < minPension) {
        pension = minPension;
    } else if (pension > maxPension) {
        pension = maxPension;
    }*/

    return Math.round(pension / 10) * 10;
}

function calculateHealthInsurance(monthlySalary: number) {
    const insuranceRate = 0.03545; // 3.545%의 보험율
    const minInsurance = 279266; // 최저 건강보험 액수
    const maxInsurance = 110332300; // 최고 건강보험 액수

    // 보험 계산
    let healthInsurance = monthlySalary * insuranceRate;

    // 최소 및 최대 보험 액수 적용
    /*if (healthInsurance < minInsurance) {
        healthInsurance = minInsurance;
    } else if (healthInsurance > maxInsurance) {
        healthInsurance = maxInsurance;
    }*/

    return Math.round(healthInsurance / 10) * 10;
}

function calculateLongTermCare(healthInsurance: number) {
    const careRate = 0.1281; // 12.81%의 요양금액 비율

    const careTax = healthInsurance * careRate
    // 요양금액 계산
    return Math.round(careTax / 10) * 10 ;
}

function calculateEmploymentInsurance(monthlySalary: number) {
    const insuranceRate = 0.009; // 0.9%의 보험율

    // 고용보험금액 계산
    const employmentInsurance = monthlySalary * insuranceRate
    return Math.round(employmentInsurance / 10) * 10 ;
}

export default {
    getRealSalary
} as SalaryService