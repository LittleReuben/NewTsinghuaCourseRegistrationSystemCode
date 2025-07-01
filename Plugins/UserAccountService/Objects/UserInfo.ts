/**
 * UserInfo
 * desc: 用户信息，包括用户的基本信息和权限角色
 * @param userID: Int (用户的唯一ID)
 * @param userName: String (用户名)
 * @param accountName: String (账户名)
 * @param password: String (账户密码)
 * @param role: UserRole (用户权限角色)
 */
import { Serializable } from 'Plugins/CommonUtils/Send/Serializable'

import { UserRole } from 'Plugins/UserAccountService/Objects/UserRole';


export class UserInfo extends Serializable {
    constructor(
        public  userID: number,
        public  userName: string,
        public  accountName: string,
        public  password: string,
        public  role: UserRole
    ) {
        super()
    }
}


