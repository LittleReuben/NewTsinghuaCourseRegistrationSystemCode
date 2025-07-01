/**
 * QueryStudentSelectedCoursesMessage
 * desc: 用于处理查询选中课程的功能需求。
 * @param studentToken: String (学生的鉴权token，用于验证身份和权限)
 * @return selectedCourses: CourseInfo (学生选中课程的详细信息列表)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class QueryStudentSelectedCoursesMessage extends TongWenMessage {
    constructor(
        public  studentToken: string
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10010"
    }
}

