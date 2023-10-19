interface CounterService {
    countCharacters(input: string, includeSpaces: boolean): number
    countBytes(input: string, includeSpaces: boolean): number
}

function countCharacters(input: string, includeSpaces: boolean = true): number {
    if (includeSpaces) {
        // 띄어쓰기를 포함하여 문자열의 길이를 반환합니다.
        return input.length;
    } else {
        // 띄어쓰기를 제외한 문자열의 길이를 반환합니다.
        const withoutSpaces = input.replace(/\s/g, ''); // 정규표현식을 사용해 공백을 제거
        return withoutSpaces.length;
    }
}

function countBytes(input: string, includeSpaces: boolean = true): number {
    let text = input
    if (!includeSpaces) {
        text = input.replace(/\s/g, '')
    }

    let count = 0
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);
        count += charCode < 128 ? 1 : 2;
    }

    return count
}

export default {
    countCharacters,
    countBytes
}