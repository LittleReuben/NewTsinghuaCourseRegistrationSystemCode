/**
 * RunCourseRandomSelectionAndMoveToNextPhaseMessage
 * desc: 管理员执行系统抽签，将学生分配至选上列表或Waiting List，完成阶段切换。返回抽签确认信息。
 * @param adminToken: String (管理员的权限验证token。)
 * @return result: String (确认抽签完成及阶段切换的信息。)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class RunCourseRandomSelectionAndMoveToNextPhaseMessage extends TongWenMessage {
    constructor(
        public  adminToken: string
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10014"
    }
}

