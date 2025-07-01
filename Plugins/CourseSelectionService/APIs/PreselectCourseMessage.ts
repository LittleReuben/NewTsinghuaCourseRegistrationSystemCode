/**
 * PreselectCourseMessage
 * desc: 用于处理预选课程的功能需求。
 * @param studentToken: String (学生身份验证的token，用于鉴权和识别学生.)
 * @param courseID: Int (课程ID，指定要进行预选的课程.)
 * @return resultMessage: String (操作结果的返回信息，例如预选成功或错误信息.)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class PreselectCourseMessage extends TongWenMessage {
    constructor(
        public  studentToken: string,
        public  courseID: number
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10010"
    }
}

