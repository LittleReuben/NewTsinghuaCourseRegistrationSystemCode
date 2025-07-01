/**
 * QueryCoursePreselectionDataMessage
 * desc: 用于查看课程预选数据的功能需求。
 * @param teacherToken: String (教师Token, 用于鉴权和验证教师身份。)
 * @param courseID: Int (课程ID，用于指定需要查询的课程。)
 * @return preselectionData: SafeUserInfo (预选课程的学生安全信息列表。)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class QueryCoursePreselectionDataMessage extends TongWenMessage {
    constructor(
        public  teacherToken: string,
        public  courseID: number
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10010"
    }
}

