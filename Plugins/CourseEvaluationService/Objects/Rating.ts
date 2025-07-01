export enum Rating {
    one = '评分为1分',
    two = '评分为2分',
    three = '评分为3分',
    four = '评分为4分',
    five = '评分为5分'
}

export const ratingList = Object.values(Rating)

export function getRating(newType: string): Rating {
    return ratingList.filter(t => t === newType)[0]
}
