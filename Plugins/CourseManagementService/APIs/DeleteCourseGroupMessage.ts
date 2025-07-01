/**
 * DeleteCourseGroupMessage
 * desc: 用于处理删除课程组的功能需求。
 * @param teacherToken: String (教师的身份令牌，用于鉴权)
 * @param courseGroupID: Int (课程组的唯一ID，用于标识需要删除的课程组)
 * @return deleteResult: String (返回删除结果的确认信息，说明操作是否成功)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class DeleteCourseGroupMessage extends TongWenMessage {
    constructor(
        public  teacherToken: string,
        public  courseGroupID: number
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10013"
    }
}

