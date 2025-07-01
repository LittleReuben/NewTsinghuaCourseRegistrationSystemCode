/**
 * QueryCourseWaitingListDataMessage
 * desc: 用于查看课程Waiting List数据的功能需求。
 * @param teacherToken: String (教师的身份验证Token，用于进行权限验证。)
 * @param courseID: Int (课程ID，用于指定查询哪一门课程的Waiting List数据。)
 * @return waitingListData: SafeUserInfo (课程的Waiting List数据，返回安全用户信息。)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class QueryCourseWaitingListDataMessage extends TongWenMessage {
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

