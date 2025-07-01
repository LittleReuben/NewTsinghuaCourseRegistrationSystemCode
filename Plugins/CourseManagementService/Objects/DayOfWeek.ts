export enum DayOfWeek {
    monday = '星期一',
    tuesday = '星期二',
    wednesday = '星期三',
    thursday = '星期四',
    friday = '星期五',
    saturday = '星期六',
    sunday = '星期日'
}

export const dayOfWeekList = Object.values(DayOfWeek)

export function getDayOfWeek(newType: string): DayOfWeek {
    return dayOfWeekList.filter(t => t === newType)[0]
}
