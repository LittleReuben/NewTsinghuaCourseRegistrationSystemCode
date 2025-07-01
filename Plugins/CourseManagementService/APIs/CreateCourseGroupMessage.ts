/**
 * CreateCourseGroupMessage
 * desc: 用于处理创建课程组的功能需求。
 * @param teacherToken: String (教师鉴权的Token)
 * @param name: String (课程组名称)
 * @param credit: Int (课程组的学分)
 * @return createdCourseGroup: CourseGroup (新增的课程组信息)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class CreateCourseGroupMessage extends TongWenMessage {
    constructor(
        public  teacherToken: string,
        public  name: string,
        public  credit: number
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10013"
    }
}

