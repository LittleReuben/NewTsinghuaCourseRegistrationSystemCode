export enum TimePeriod {
    morning = '8:00-9:35',
    lateMorning = '9:50-12:15',
    earlyAfternoon = '13:30-15:05',
    midAfternoon = '15:20-16:55',
    lateAfternoon = '17:05-18:40',
    evening = '19:20-21:45'
}

export const timePeriodList = Object.values(TimePeriod)

export function getTimePeriod(newType: string): TimePeriod {
    return timePeriodList.filter(t => t === newType)[0]
}
