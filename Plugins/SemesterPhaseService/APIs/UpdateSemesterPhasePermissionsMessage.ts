/**
 * UpdateSemesterPhasePermissionsMessage
 * desc: 更新学期阶段操作权限设置的接口
 * @param adminToken: String (管理员验证身份的Token)
 * @param allowTeacherManage: Boolean (是否允许教师管理课程组和课程)
 * @param allowStudentSelect: Boolean (是否允许学生选课)
 * @param allowStudentDrop: Boolean (是否允许学生退课)
 * @param allowStudentEvaluate: Boolean (是否允许学生评价课程)
 * @return updatedPermissions: Permissions (更新后的阶段权限设置，包含所有权限字段)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class UpdateSemesterPhasePermissionsMessage extends TongWenMessage {
    constructor(
        public  adminToken: string,
        public  allowTeacherManage: boolean,
        public  allowStudentSelect: boolean,
        public  allowStudentDrop: boolean,
        public  allowStudentEvaluate: boolean
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10014"
    }
}

