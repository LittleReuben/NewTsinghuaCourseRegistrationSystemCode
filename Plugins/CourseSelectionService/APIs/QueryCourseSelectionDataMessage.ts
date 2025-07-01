/**
 * QueryCourseSelectionDataMessage
 * desc: 用于查看课程选上数据的功能需求。
 * @param teacherToken: String (老师验证身份的令牌，用于鉴权。)
 * @param courseID: Int (课程唯一ID，用于查询对应课程选上的数据。)
 * @return selectionData: SafeUserInfo (选上课程的安全用户信息列表，包含用户ID、用户名、账号名和角色权限。)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class QueryCourseSelectionDataMessage extends TongWenMessage {
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

