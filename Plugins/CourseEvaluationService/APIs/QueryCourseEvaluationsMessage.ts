/**
 * QueryCourseEvaluationsMessage
 * desc: 用于处理查看课程评价的功能需求，返回某门课程的所有评价条目，包括评分及评价文字。
 * @param userToken: String (用户鉴权的Token，用于验证权限。)
 * @param courseID: Int (被查询的课程ID，用于课程评价的筛选。)
 * @return evaluations: CourseEvaluation (包含课程评价的列表信息，包括评价人的ID、评分和反馈内容。)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class QueryCourseEvaluationsMessage extends TongWenMessage {
    constructor(
        public  userToken: string,
        public  courseID: number
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10016"
    }
}

