/**
 * UpdateCourseMessage
 * desc: 用于处理修改课程的功能需求
 * @param teacherToken: String (教师身份验证Token，用于鉴权)
 * @param courseID: Int (需要修改的课程ID)
 * @param newCapacity: Int (新的课程容量)
 * @param newLocation: String (新的课程地点)
 * @return updatedCourse: CourseInfo (更新后的课程信息)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class UpdateCourseMessage extends TongWenMessage {
    constructor(
        public  teacherToken: string,
        public  courseID: number,
        public  newCapacity: number | null,
        public  newLocation: string | null
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10013"
    }
}

