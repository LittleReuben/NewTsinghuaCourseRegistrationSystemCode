/**
 * SystemLogEntry
 * desc: 系统日志条目，记录用户操作及相关信息
 * @param logID: Int (日志的唯一标识)
 * @param timestamp: DateTime (日志生成的时间戳)
 * @param userID: Int (用户的唯一标识)
 * @param action: String (用户执行的操作)
 * @param details: String (操作的详细信息)
 */
import { Serializable } from 'Plugins/CommonUtils/Send/Serializable'




export class SystemLogEntry extends Serializable {
    constructor(
        public  logID: number,
        public  timestamp: number,
        public  userID: number,
        public  action: string,
        public  details: string
    ) {
        super()
    }
}


