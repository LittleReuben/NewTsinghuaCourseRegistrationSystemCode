/**
 * QueryOwnCoursesMessage
 * desc: 用于处理查看课程的功能需求。
 * @param teacherToken: String (教师鉴权的Token，用于确认身份权限。)
 * @return ownCourses: CourseInfo (教师开设的课程信息列表。)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class QueryOwnCoursesMessage extends TongWenMessage {
    constructor(
        public  teacherToken: string
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10013"
    }
}

