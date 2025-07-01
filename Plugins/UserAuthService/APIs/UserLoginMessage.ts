/**
 * UserLoginMessage
 * desc: 用户登录接口，验证账号名和密码后生成并返回登录Token。
 * @param accountName: String (用于登录的账号名称)
 * @param password: String (用于登录的账号密码)
 * @return userToken: String (验证成功后的用户登录令牌)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class UserLoginMessage extends TongWenMessage {
    constructor(
        public  accountName: string,
        public  password: string
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10012"
    }
}

