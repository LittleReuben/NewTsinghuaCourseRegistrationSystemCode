/**
 * QueryOwnCourseGroupsMessage
 * desc: 用于处理查看课程组的功能需求。
 * @param teacherToken: String (教师的鉴权令牌，用于验证教师身份)
 * @return ownCourseGroups: CourseGroup (教师创建的课程组列表)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class QueryOwnCourseGroupsMessage extends TongWenMessage {
    constructor(
        public  teacherToken: string
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10013"
    }
}

