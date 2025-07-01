/**
 * QuerySafeUserInfoByUserIDMessage
 * desc: 用户传入userID进行查询，系统返回该用户的安全用户信息。
 * @param userID: Int (用户的唯一标识符，用于查询用户信息。)
 * @return safeUserInfo: SafeUserInfo (安全的用户信息，不包含密码，供外部使用。)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class QuerySafeUserInfoByUserIDMessage extends TongWenMessage {
    constructor(
        public  userID: number
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10015"
    }
}

