/**
 * QuerySafeUserInfoByUserIDListMessage
 * desc: 批量查询用户安全信息，返回结果的顺序与输入的userID列表顺序一致。
 * @param userIDList: Int (用户ID列表，用于筛选安全用户信息，需保持返回结果顺序与输入顺序一致。)
 * @return safeUserInfoList: SafeUserInfo (安全用户信息列表，对应输入的用户ID列表。)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class QuerySafeUserInfoByUserIDListMessage extends TongWenMessage {
    constructor(
        public  userIDList: number[]
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10015"
    }
}

