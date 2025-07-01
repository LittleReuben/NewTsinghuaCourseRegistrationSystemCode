/**
 * PairOfGroupAndCourse
 * desc: 
 * @param CourseGroup: CourseGroup (课程组)
 * @param Course: CourseInfo:1180 (课程信息)
 */
import { Serializable } from 'Plugins/CommonUtils/Send/Serializable'

import { CourseGroup } from 'Plugins/CourseManagementService/Objects/CourseGroup';
import { CourseInfo } from 'Plugins/CourseManagementService/Objects/CourseInfo';


export class PairOfGroupAndCourse extends Serializable {
    constructor(
        public  CourseGroup: CourseGroup,
        public  Course: CourseInfo
    ) {
        super()
    }
}


