/**
 * RemovePreselectedCourseMessage
 * desc: 用于处理移除预选课程的功能需求
 * @param studentToken: String (学生登录的鉴权Token，用于确认身份)
 * @param courseID: Int (课程的唯一标识ID，用于确定需要移除预选记录的课程)
 * @return resultMessage: String (操作执行结果的信息反馈，例如成功或错误信息)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class RemovePreselectedCourseMessage extends TongWenMessage {
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

