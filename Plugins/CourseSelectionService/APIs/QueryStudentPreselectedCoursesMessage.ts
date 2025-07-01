/**
 * QueryStudentPreselectedCoursesMessage
 * desc: 用于处理查询预选课程的功能需求。
 * @param studentToken: String (学生登录的唯一标识，用于鉴权。)
 * @return preselectedCourses: CourseInfo (学生预选课程的详细信息列表。)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class QueryStudentPreselectedCoursesMessage extends TongWenMessage {
    constructor(
        public  studentToken: string
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10010"
    }
}

