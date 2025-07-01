/**
 * QueryCourseByIDMessage
 * desc: 用于根据课程ID查询课程信息的功能需求
 * @param userToken: String (用户的访问身份验证令牌)
 * @param courseID: Int (需要查询的课程的ID)
 * @return course: CourseInfo (课程信息，包括课程容量、时间、地点等详细字段)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class QueryCourseByIDMessage extends TongWenMessage {
    constructor(
        public  userToken: string,
        public  courseID: number
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10013"
    }
}

