/**
 * UpdateCourseEvaluationMessage
 * desc: 用于处理修改课程评价的功能需求。
 * @param studentToken: String (学生登录的身份验证令牌，以便认证学生身份。)
 * @param courseID: Int (课程ID，用于指定需要修改评价的课程。)
 * @param newRating: Rating (新的评分信息，表示课程的评分值。)
 * @param newFeedback: String (新的评价内容，包含学生对课程的文字评价。)
 * @return resultMessage: String (操作结果的消息字符串，例如'更新成功！'或具体错误信息。)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'
import { Rating } from 'Plugins/CourseEvaluationService/Objects/Rating';


export class UpdateCourseEvaluationMessage extends TongWenMessage {
    constructor(
        public  studentToken: string,
        public  courseID: number,
        public  newRating: Rating,
        public  newFeedback: string
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10016"
    }
}

