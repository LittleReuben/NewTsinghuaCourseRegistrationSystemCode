/**
 * SafeUserInfo
 * desc: 用户隐私安全信息，不包含敏感字段
 * @param userID: Int (用户的唯一ID)
 * @param userName: String (用户名)
 * @param accountName: String (账号名)
 * @param role: UserRole (用户角色类型)
 */
import { Serializable } from 'Plugins/CommonUtils/Send/Serializable'

import { UserRole } from 'Plugins/UserAccountService/Objects/UserRole';


export class SafeUserInfo extends Serializable {
    constructor(
        public  userID: number,
        public  userName: string,
        public  accountName: string,
        public  role: UserRole
    ) {
        super()
    }
}


