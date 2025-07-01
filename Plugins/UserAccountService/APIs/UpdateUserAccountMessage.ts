/**
 * UpdateUserAccountMessage
 * desc: 管理员传入adminToken验证权限后，根据userID查找用户，并根据传入的更新字段完成信息修改，返回最新用户信息。同时，如果被修改的用户处于登录状态需要强制登出。
 * @param adminToken: String (管理员权限验证的token，确保操作的管理权限)
 * @param userID: Int (目标用户的ID，用来定位用户在数据库中的记录)
 * @param newName: String (用户的新名字，系统会根据传入字段进行更新)
 * @param newAccountName: String (用户的新账号名，需要验证唯一性)
 * @param newPassword: String (用户的新密码，需要加密存储)
 * @return updatedUserInfo: UserInfo (更新后的用户完整信息，包括userID、userName、accountName、密码和用户角色)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class UpdateUserAccountMessage extends TongWenMessage {
    constructor(
        public  adminToken: string,
        public  userID: number,
        public  newName: string | null,
        public  newAccountName: string | null,
        public  newPassword: string | null
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10015"
    }
}

