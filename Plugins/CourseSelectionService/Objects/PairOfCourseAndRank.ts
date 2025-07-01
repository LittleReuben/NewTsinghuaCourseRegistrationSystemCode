/**
 * PairOfCourseAndRank
 * desc: 
 * @param course: CourseInfo:1180 (课程信息)
 * @param rank: Int (waiting list中的排名)
 */
import { Serializable } from 'Plugins/CommonUtils/Send/Serializable'

import { CourseInfo } from 'Plugins/CourseManagementService/Objects/CourseInfo';


export class PairOfCourseAndRank extends Serializable {
    constructor(
        public  course: CourseInfo,
        public  rank: number
    ) {
        super()
    }
}


