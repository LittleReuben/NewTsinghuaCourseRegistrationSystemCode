/**
 * DropCourseMessage
 * desc: 用于处理退选课程的功能需求。
 * @param studentToken: String (学生的验证令牌，用于鉴权和身份校验。)
 * @param courseID: Int (课程的唯一标识符。)
 * @return resultMessage: String (操作结果的确认信息，描述退课成功或失败的原因。)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class DropCourseMessage extends TongWenMessage {
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

