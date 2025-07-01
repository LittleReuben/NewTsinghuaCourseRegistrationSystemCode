/**
 * QuerySystemLogsMessage
 * desc: 管理员查询系统日志记录，并可根据时间范围或者用户ID进行过滤，返回日志信息列表。
 * @param adminToken: String (管理员的身份验证令牌，用于确认操作权限。)
 * @param fromTimestamp: DateTime (查询的起始时间，可选项。)
 * @param toTimestamp: DateTime (查询的结束时间，可选项。)
 * @param userIDs: Int (需要过滤的用户ID列表，可选项。)
 * @return logEntries: SystemLogEntry (返回的日志记录，包含日志ID、时间戳、用户ID、操作描述与详细信息)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class QuerySystemLogsMessage extends TongWenMessage {
    constructor(
        public  adminToken: string,
        public  fromTimestamp: number | null,
        public  toTimestamp: number | null,
        public  userIDs: number[]
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10011"
    }
}

