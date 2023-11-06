import type {AddrResult} from "Addr";


async function getAddrFromKrToEn(keyword: string): Promise<Promise<AddrResult> | false> {
    const runtimeConfig = useRuntimeConfig()
    const params = {
        confmKey: runtimeConfig.public.addrKey as string,
        keyword: keyword,
        resultType: 'json'
    }
    const queryString = new URLSearchParams(params).toString()
    const response = await fetch(`https://business.juso.go.kr/addrlink/addrEngApi.do?${queryString}`, {
        method: 'GET'
    })
    const { results } = await response.json()
    let result: AddrResult | false = {
        common: results.common,
        juso: results.juso
    }
    if (result.common?.errorCode !== '0') {
        result = false
    }

    return result
}

export default {
    getAddrFromKrToEn
}