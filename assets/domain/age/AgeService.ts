interface AgeService {
    calculateKoreanAge(inputBirthDate: Date, inputRefDate: Date): number
    getDateFromString(inputDateString: string): Date
    getFormatStringFromDate(inputDate: Date): string
    getValidDateString(input: string | Date): string
    isValidDate(date: string): boolean
}

const calculateKoreanAge: AgeService['calculateKoreanAge'] = (inputBirthDate, inputRefDate = new Date()) => {
    // 생년월일에서 연도와 월을 추출
    const birthYear = inputBirthDate.getFullYear()
    const birthMonth = inputBirthDate.getMonth() + 1 // 월은 0부터 시작하므로 +1 해줍니다.
    const birthDate = inputBirthDate.getDate()

    // 현재 날짜에서 연도와 월을 추출
    const refYear = inputRefDate.getFullYear()
    const refMonth = inputRefDate.getMonth() + 1
    const refDate = inputRefDate.getDate()

    // 만 나이 계산
    let age = refYear - birthYear;
    if (refMonth <= birthMonth && refDate <= birthDate) {
        age--; // 아직 생일이 안 지난 경우 한 살 뺍니다.
    }

    return age;
}

const getDateFromString: AgeService['getDateFromString'] = (inputDateString) => {
    const dateString = inputDateString.replace(/-/g, '')
    return new Date (
        Number(dateString.slice(0, 4)),  // 연도
        Number(dateString.slice(4, 6)) - 1,  // 월
        Number(dateString.slice(6, 8)) // 일
    )
}

const getFormatStringFromDate: AgeService['getFormatStringFromDate'] = (inputDate: Date) => {
    const year = inputDate.getFullYear();
    let month: string | number = (1 + inputDate.getMonth());
    month = month >= 10 ? month : '0' + month;
    let day: string | number = inputDate.getDate();
    day = day >= 10 ? day : '0' + day;
    return  year + '' + month + '' + day;
}

const getValidDateString: AgeService['getValidDateString'] = (input: string | Date) => {
    if (typeof input === 'string') {
        const date = getDateFromString(input)
        return getFormatStringFromDate(date)
    } else {
        return getFormatStringFromDate(input)
    }
}
const isValidDate: AgeService['isValidDate'] = (dateString) => {
    // 입력된 날짜가 "YYYYMMDD" 형식이어야 합니다.
    if (!/^\d{8}$/.test(dateString)) {
        return false;
    }

    //입력받은 값과 Date타입으로 변환한 값을 비교하여 같은지 확인
    return dateString === getFormatStringFromDate(getDateFromString(dateString));
}

export default {
    calculateKoreanAge,
    getDateFromString,
    getValidDateString,
    isValidDate
}