/**
 * SelectCourseMessage
 * desc: 用于处理正选课程的功能需求。
 * @param studentToken: String (学生鉴权token，用于验证学生身份。)
 * @param courseID: Int (课程ID，用于指向具体课程。)
 * @return resultMessage: String (返回结果消息，指示选课操作的成功与否。)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class SelectCourseMessage extends TongWenMessage {
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

