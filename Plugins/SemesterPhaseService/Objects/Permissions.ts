/**
 * Permissions
 * desc: 表示权限信息，定义了特定权限是否被允许
 * @param allowTeacherManage: Boolean (是否允许教师管理)
 * @param allowStudentSelect: Boolean (是否允许学生选课)
 * @param allowStudentDrop: Boolean (是否允许学生退课)
 * @param allowStudentEvaluate: Boolean (是否允许学生评价课程)
 */
import { Serializable } from 'Plugins/CommonUtils/Send/Serializable'




export class Permissions extends Serializable {
    constructor(
        public  allowTeacherManage: boolean,
        public  allowStudentSelect: boolean,
        public  allowStudentDrop: boolean,
        public  allowStudentEvaluate: boolean
    ) {
        super()
    }
}


