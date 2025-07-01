/**
 * QueryCourseGroupByIDMessage
 * desc: 根据课程组ID查询课程组信息
 * @param userToken: String (用户认证的token，用于验证权限。)
 * @param courseGroupID: Int (课程组ID，用于指定查询的目标。)
 * @return courseGroup: CourseGroup (返回的课程组信息，包含课程组的ID、名称、学分、创建者及授权教师列表。)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class QueryCourseGroupByIDMessage extends TongWenMessage {
    constructor(
        public  userToken: string,
        public  courseGroupID: number
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10013"
    }
}

