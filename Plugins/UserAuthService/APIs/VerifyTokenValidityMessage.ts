/**
 * VerifyTokenValidityMessage
 * desc: 验证Token有效性的接口
 * @param userToken: String (用户的登录token，用于验证其是否合法且未过期。)
 * @return isValid: Boolean (判断Token是否有效，返回布尔值。)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class VerifyTokenValidityMessage extends TongWenMessage {
    constructor(
        public  userToken: string
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10012"
    }
}

