/**
 * SemesterPhase
 * desc: 学期阶段信息
 * @param currentPhase: Phase:1069 (当前的学期阶段)
 * @param permissions: Permissions:1171 (阶段对应的权限配置)
 */
import { Serializable } from 'Plugins/CommonUtils/Send/Serializable'

import { Phase } from 'Plugins/SemesterPhaseService/Objects/Phase';
import { Permissions } from 'Plugins/SemesterPhaseService/Objects/Permissions';


export class SemesterPhase extends Serializable {
    constructor(
        public  currentPhase: Phase,
        public  permissions: Permissions
    ) {
        super()
    }
}


