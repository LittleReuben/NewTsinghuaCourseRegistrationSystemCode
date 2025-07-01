export enum UserRole {
    superAdmin = '超级管理员角色',
    teacher = '教师角色',
    student = '学生角色'
}

export const userRoleList = Object.values(UserRole)

export function getUserRole(newType: string): UserRole {
    return userRoleList.filter(t => t === newType)[0]
}
