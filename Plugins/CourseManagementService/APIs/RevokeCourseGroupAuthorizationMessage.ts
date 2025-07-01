/**
 * RevokeCourseGroupAuthorizationMessage
 * desc: 用于处理取消授权老师的功能需求。
 * @param teacherToken: String (老师的令牌，用于验证老师身份和权限。)
 * @param courseGroupID: Int (课程组ID，用于定位要操作的课程组。)
 * @param authorizedTeacherID: Int (需要取消授权的老师ID。)
 * @return updatedAuthorizedTeachers: Int (最新的授权老师ID列表。)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class RevokeCourseGroupAuthorizationMessage extends TongWenMessage {
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

