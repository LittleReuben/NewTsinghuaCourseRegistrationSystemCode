/**
 * CreateUserAccountMessage
 * desc: 管理员传入adminToken验证权限后，传入用户的名字、账号名、密码以及角色类型（Teacher或Student），系统自动生成userID并返回新增用户信息。
 * @param adminToken: String (管理员权限校验令牌)
 * @param name: String (用户的姓名)
 * @param accountName: String (用户的账号名，唯一标识)
 * @param password: String (用户的登录密码)
 * @param role: UserRole:1186 (用户角色类型，可选择Teacher或Student)
 * @return userInfo: UserInfo:1129 (新增用户的完整信息)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'
import { UserRole } from 'Plugins/UserAccountService/Objects/UserRole';


export class CreateUserAccountMessage extends TongWenMessage {
    constructor(
        public  adminToken: string,
        public  name: string,
        public  accountName: string,
        public  password: string,
        public  role: UserRole
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10015"
    }
}

