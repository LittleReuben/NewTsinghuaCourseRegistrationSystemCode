/**
 * QueryCourseGroupAuthorizationReceivedMessage
 * desc: 用于处理查看被授权课程组的功能需求。
 * @param teacherToken: String (教师登录的鉴权Token，用以验证权限并获取teacherID。)
 * @return receivedCourseGroups: CourseGroup (被授权的课程组信息列表，包含课程组的ID、名称、学分和创建者信息。)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class QueryCourseGroupAuthorizationReceivedMessage extends TongWenMessage {
    constructor(
        public  teacherToken: string
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10013"
    }
}

