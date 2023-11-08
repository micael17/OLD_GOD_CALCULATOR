import { type Response, type WeatherValue } from "Weather";

interface WeatherService {
    getWeather(location: string): WeatherValue
}

const locationList = [
    {
        name: 'SEOUL',
        nx: '60',
        ny: '127'
    }, {
        name: 'BUSAN',
        nx: '98',
        ny: '76',
    }, {
        name: 'INCHN',
        nx: '55',
        ny: '124',
    }, {
        name: 'DAEGU',
        nx: '89',
        ny: '90',
    }, {
        name: 'DAEJN',
        nx: '67',
        ny: '100',
    }, {
        name: 'GWAJU',
        nx: '58',
        ny: '74',
    }
]

const categories = {
    '온도' : 'T1H',
    '강수량': 'RN1',
    '습도': 'REH'
}

const getWeather = async (location: string) => {
    const item = locationList.find((item) => item.name.toLowerCase() === location.toLowerCase())
    if (!item) return;

    const today = new Date();
    const month = (today.getMonth() + 1).toString()
    const date = today.getDate().toString()
    const baseDate = String(today.getFullYear()) + (month.length < 2 ? '0' + month : month) + (date.length < 2 ? '0' + date : date)

    const time = () => {
        let hour = (today.getHours() - 1).toString()
        if(hour.length < 2) hour = '0' + hour
        return hour + '00'
    }

    const query = {
        ServiceKey: 'XjwVk97JWx5gTYZcAqrsskqEmTKMWgK5mh8g+iN1E5sj78+056KtJT4I+8KTklbI8pQC1W6FGYBodr12jLBSmQ==',
        dataType: 'JSON',
        base_date: baseDate,
        base_time: time(),
        nx: item.nx,
        ny: item.ny
    }
    const queryString = new URLSearchParams(query).toString()
    const res = await fetch('http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?' + queryString)

    const { response }: { response: Response } = await res.json()
    if (!response || response?.header?.resultCode !== '00') return
    const temperature = response.body.items.item.find((item) => item.category === categories['온도'])?.obsrValue || ''
    const humidity = response.body.items.item.find((item) => item.category === categories['습도'])?.obsrValue || ''

    return {
        temperature: temperature,
        humidity: humidity
    }

}

export default {
    getWeather
}