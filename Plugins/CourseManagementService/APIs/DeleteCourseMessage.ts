/**
 * DeleteCourseMessage
 * desc: 用于处理删除课程的功能需求。
 * @param teacherToken: String (教师的鉴权令牌，用于验证权限)
 * @param courseID: Int (需要删除的课程的唯一标识)
 * @return deleteResult: String (删除课程的结果信息，成功或错误信息)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class DeleteCourseMessage extends TongWenMessage {
    constructor(
        public  teacherToken: string,
        public  courseID: number
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10013"
    }
}

