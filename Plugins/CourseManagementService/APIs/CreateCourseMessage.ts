/**
 * CreateCourseMessage
 * desc: 用于处理创建课程的功能需求。
 * @param teacherToken: String (教师的身份验证令牌，用于鉴权。)
 * @param courseGroupID: Int (课程组ID，用于标识所属课程组。)
 * @param courseCapacity: Int (课程容量，表示该课程允许的最大学生人数。)
 * @param time: CourseTime:1173 (课程上课时间列表，包含每节课的时间信息。)
 * @param location: String (课程的上课地点。)
 * @return createdCourse: CourseInfo:1180 (新创建的课程信息，包括课程ID、课程容量、时间、地点、课程组信息等。)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'
import { CourseTime } from 'Plugins/CourseManagementService/Objects/CourseTime';


export class CreateCourseMessage extends TongWenMessage {
    constructor(
        public  teacherToken: string,
        public  courseGroupID: number,
        public  courseCapacity: number,
        public  time: CourseTime[],
        public  location: string
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10013"
    }
}

