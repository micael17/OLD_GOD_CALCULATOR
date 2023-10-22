import type { xml2json } from 'Etc'
function xmlToJson(xmlString): xml2json {

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString,"text/xml");

    const parentMapNode = xmlDoc.getElementById("lbrIncSmpTxamtDVO")
    let tax = '' // 소득세
    let localTax = '' //지방소득세
    let totalTax = ''
    if (parentMapNode) {
        try {
            tax = parentMapNode.getElementsByTagName("inctx")[0].childNodes[0].data
            localTax = parentMapNode.getElementsByTagName("lclInctx")[0].childNodes[0].data
            totalTax = parentMapNode.getElementsByTagName("pmtTxamtSum")[0].childNodes[0].data
        } catch (e) {
            console.err('XML to Json conversion has error: ', e)
        }
    }
    return {
        tax, localTax, totalTax
    }
}


async function getTaxData(familyCnt: string, childCnt: string, monthlyIncome: string) {
    const fCnt = familyCnt.replace(/,/g, '');
    const cCnt = childCnt.replace(/,/g, '');
    const income = monthlyIncome.replace(/,/g, '');

    const xml = '<map>\n' +
        '<smpTxamtIncClCd>01</smpTxamtIncClCd>\n' +
        '<applcYrMmDd>20230228</applcYrMmDd>\n' +
        '<mmSnw>' + income + ' </mmSnw>\n' +
        '<ddcTrgtFmlyCnt>' + fCnt + '</ddcTrgtFmlyCnt>\n' +
        '<chldCnt>' + cCnt + '</chldCnt>\n' +
        '</map>'

    console.log('xml: ', xml)

    const url = 'https://teht.hometax.go.kr/wqAction.do?actionId=ATESFAAA025R01'
    const res= await fetch(url, {
        method: 'POST',
        mode: 'cors',

        headers: {

        },
        body: xml
    })

    const text = await res.text()
    const str = new DOMParser().parseFromString(text, 'application/xml')

    console.log(str)

    return res
}

export default {
    xmlToJson,
    getTaxData,
}