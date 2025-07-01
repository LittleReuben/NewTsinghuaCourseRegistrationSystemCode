/**
 * QuerySemesterPhaseStatusMessage
 * desc: 用户传入userToken验证权限后，系统返回目前的学期阶段信息及操作权限状态。
 * @param userToken: String (用户唯一认证的token，用于验证权限)
 * @return semesterPhase: SemesterPhase (包含学期阶段当前状态及权限信息的SemesterPhase对象)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class QuerySemesterPhaseStatusMessage extends TongWenMessage {
    constructor(
        public  userToken: string
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10014"
    }
}

