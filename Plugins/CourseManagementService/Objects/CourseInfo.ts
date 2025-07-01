/**
 * CourseInfo
 * desc: 课程信息，包括课程ID、容量、上课时间、地点及相关人员信息
 * @param courseID: Int (课程唯一标识ID)
 * @param courseCapacity: Int (课程的容量大小)
 * @param time: CourseTime (课程时间安排信息)
 * @param location: String (课程的地点)
 * @param courseGroupID: Int (课程所属分组ID)
 * @param teacherID: Int (课程负责人教师ID)
 * @param preselectedStudentsSize: Int (提前选课的学生数量)
 * @param selectedStudentsSize: Int (最终选择该课程的学生数量)
 * @param waitingListSize: Int (等待名单上的学生数量)
 */
import { Serializable } from 'Plugins/CommonUtils/Send/Serializable'

import { CourseTime } from 'Plugins/CourseManagementService/Objects/CourseTime';


export class CourseInfo extends Serializable {
    constructor(
        public  courseID: number,
        public  courseCapacity: number,
        public  time: CourseTime[],
        public  location: string,
        public  courseGroupID: number,
        public  teacherID: number,
        public  preselectedStudentsSize: number,
        public  selectedStudentsSize: number,
        public  waitingListSize: number
    ) {
        super()
    }
}


