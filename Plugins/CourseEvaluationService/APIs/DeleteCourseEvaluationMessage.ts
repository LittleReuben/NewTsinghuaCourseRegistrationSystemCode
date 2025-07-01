/**
 * DeleteCourseEvaluationMessage
 * desc: 用于处理删除课程评价的功能需求
 * @param studentToken: String (学生身份验证的Token)
 * @param courseID: Int (要删除评价的课程ID)
 * @return resultMessage: String (操作结果信息，例如：删除成功或失败原因)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class DeleteCourseEvaluationMessage extends TongWenMessage {
    constructor(
        public  studentToken: string,
        public  courseID: number
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10016"
    }
}

