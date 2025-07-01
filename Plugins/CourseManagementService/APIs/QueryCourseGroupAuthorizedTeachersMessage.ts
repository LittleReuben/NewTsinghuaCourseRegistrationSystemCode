/**
 * QueryCourseGroupAuthorizedTeachersMessage
 * desc: 用于处理查看授权老师的功能需求。
 * @param teacherToken: String (教师身份验证的Token。)
 * @param courseGroupID: Int (需要查询的课程组ID。)
 * @return authorizedTeachers: Int (授权老师的ID列表。)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class QueryCourseGroupAuthorizedTeachersMessage extends TongWenMessage {
    constructor(
        public  teacherToken: string,
        public  courseGroupID: number
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10013"
    }
}

