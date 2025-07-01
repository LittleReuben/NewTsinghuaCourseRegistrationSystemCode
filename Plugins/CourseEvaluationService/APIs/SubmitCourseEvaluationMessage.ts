/**
 * SubmitCourseEvaluationMessage
 * desc: 用于处理提交课程评价的功能需求。
 * @param studentToken: String (学生身份验证的Token，用于鉴权及获取学生ID)
 * @param courseID: Int (课程的唯一标识，用于定位评价的目标课程)
 * @param rating: Rating (课程评价的评分，表示对课程的评分级别)
 * @param feedback: String (课程评价的详细文字描述)
 * @return resultMessage: String (确认处理成功或返回错误信息)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'
import { Rating } from 'Plugins/CourseEvaluationService/Objects/Rating';


export class SubmitCourseEvaluationMessage extends TongWenMessage {
    constructor(
        public  studentToken: string,
        public  courseID: number,
        public  rating: Rating,
        public  feedback: string
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10016"
    }
}

