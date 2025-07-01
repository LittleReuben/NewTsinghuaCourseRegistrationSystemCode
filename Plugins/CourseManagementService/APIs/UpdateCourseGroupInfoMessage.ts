/**
 * UpdateCourseGroupInfoMessage
 * desc: 用于处理修改课程组的功能需求。
 * @param teacherToken: String (教师鉴权所需的令牌，用于验证权限。)
 * @param courseGroupID: Int (课程组ID，用于定位需要修改的课程组。)
 * @param newName: String (新课程组名称，如果需要更新课程组名称则填写。)
 * @param newCredit: Int (新课程组学分，如果需要更新课程组学分则填写。)
 * @return updatedCourseGroup: CourseGroup (更新后的课程组信息，包含课程组ID、名称、学分和创建者等信息。)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class UpdateCourseGroupInfoMessage extends TongWenMessage {
    constructor(
        public  teacherToken: string,
        public  courseGroupID: number,
        public  newName: string | null,
        public  newCredit: number | null
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10013"
    }
}

