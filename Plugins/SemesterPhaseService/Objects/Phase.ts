export enum Phase {
    phase1 = '设立课程并预选阶段',
    phase2 = '正选并补退选阶段'
}

export const phaseList = Object.values(Phase)

export function getPhase(newType: string): Phase {
    return phaseList.filter(t => t === newType)[0]
}
