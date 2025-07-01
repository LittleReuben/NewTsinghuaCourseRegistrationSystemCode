/**
 * QuerySafeUserInfoByTokenMessage
 * desc: 根据用户传入的token验证并返回对应的安全用户信息。
 * @param userToken: String (用户的访问令牌，用于验证身份)
 * @return safeUserInfo: SafeUserInfo (包含用户ID、用户名、账号名及角色的安全用户信息，不返回密码。)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class QuerySafeUserInfoByTokenMessage extends TongWenMessage {
    constructor(
        public  userToken: string
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10015"
    }
}

