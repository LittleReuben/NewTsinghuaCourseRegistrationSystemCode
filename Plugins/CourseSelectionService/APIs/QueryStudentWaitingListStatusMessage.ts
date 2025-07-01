/**
 * QueryStudentWaitingListStatusMessage
 * desc: 用于处理查询Waiting List状态及排名的功能需求。
 * @param studentToken: String (学生的身份验证Token，用于鉴权和获取学生ID。)
 * @return waitingListStatus: PairOfCourseAndRank:1195 (Waiting List状态，包括课程信息和排名。)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class QueryStudentWaitingListStatusMessage extends TongWenMessage {
    constructor(
        public  studentToken: string
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10010"
    }
}

