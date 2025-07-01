/**
 * UserLogoutMessage
 * desc: 用户传入token完成登出操作。
 * @param userToken: String (用户的登录token，用于验证该用户是否可以完成登出操作。)
 * @return result: String (确认登出的结果信息。)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class UserLogoutMessage extends TongWenMessage {
    constructor(
        public  userToken: string
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10012"
    }
}

