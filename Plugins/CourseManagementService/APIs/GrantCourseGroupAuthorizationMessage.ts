/**
 * GrantCourseGroupAuthorizationMessage
 * desc: 用于处理授权老师开设课程组相关课程的功能需求。
 * @param teacherToken: String (教师鉴权Token，用于确认教师身份是否有效。)
 * @param courseGroupID: Int (课程组ID标识，用于指定需进行授权操作的课程组。)
 * @param authorizedTeacherID: Int (被授权教师的ID，用于指定需要授予权限的教师。)
 * @return updatedAuthorizedTeachers: Int (更新后的授权教师ID列表，与课程组关联。)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class GrantCourseGroupAuthorizationMessage extends TongWenMessage {
    constructor(
        public  teacherToken: string,
        public  courseGroupID: number,
        public  authorizedTeacherID: number
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10013"
    }
}

