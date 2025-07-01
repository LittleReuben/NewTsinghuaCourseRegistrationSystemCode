/**
 * CourseGroup
 * desc: 课程分组实体信息，为课程管理服务的一部分
 * @param courseGroupID: Int (课程分组的唯一ID)
 * @param name: String (课程分组的名称)
 * @param credit: Int (课程分组的学分)
 * @param ownerTeacherID: Int (课程分组的负责人ID)
 * @param authorizedTeachers: Int (获授权管理该课程分组的教师ID列表)
 */
import { Serializable } from 'Plugins/CommonUtils/Send/Serializable'




export class CourseGroup extends Serializable {
    constructor(
        public  courseGroupID: number,
        public  name: string,
        public  credit: number,
        public  ownerTeacherID: number,
        public  authorizedTeachers: number[]
    ) {
        super()
    }
}


