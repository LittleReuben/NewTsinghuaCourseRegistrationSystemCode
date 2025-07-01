/**
 * CourseEvaluation
 * desc: 课程评价，包括评分和反馈
 * @param evaluatorID: Int (评价者的唯一ID)
 * @param courseID: Int (课程唯一ID)
 * @param rating: Rating (评价等级)
 * @param feedback: String (评价的具体内容)
 */
import { Serializable } from 'Plugins/CommonUtils/Send/Serializable'

import { Rating } from 'Plugins/CourseEvaluationService/Objects/Rating';


export class CourseEvaluation extends Serializable {
    constructor(
        public  evaluatorID: number,
        public  courseID: number,
        public  rating: Rating,
        public  feedback: string | null
    ) {
        super()
    }
}


