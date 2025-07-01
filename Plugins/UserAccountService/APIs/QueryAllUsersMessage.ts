/**
 * QueryAllUsersMessage
 * desc: 管理员传入adminToken验证权限后，根据用户角色（Teacher或Student）过滤查询，系统返回对应的用户账号信息列表。
 * @param adminToken: String (管理员权限验证的Token，用于确认调用者具有足够权限。)
 * @param role: UserRole:1186 (用户角色类型，用于筛选用户列表（枚举：SuperAdmin、Teacher、Student）。)
 * @return userList: UserInfo:1129 (用户信息列表，包含符合筛选条件的用户数据。)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'
import { UserRole } from 'Plugins/UserAccountService/Objects/UserRole';


export class QueryAllUsersMessage extends TongWenMessage {
    constructor(
        public  adminToken: string,
        public  role: UserRole
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10015"
    }
}

