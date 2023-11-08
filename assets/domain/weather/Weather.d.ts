declare module 'Weather' {
    export interface WeatherValue {
        temperature: string
        humidity: string
    }

    export interface Item {
        baseDate: string,
        baseTime: string,
        category: string,
        nx: number,
        ny: number,
        obsrValue: string
    }

    export interface Response {
        body: {
            dataType: string,
            items: {
                item: Item[]
            },
            numOfRows: number
            pageNo: number
            totalCount: number
        },
        header: {
            resultCode: string
            resultMsg: string
        }
    }

}