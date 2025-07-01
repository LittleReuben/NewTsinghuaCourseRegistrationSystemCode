/**
 * CourseTime
 * desc: 表示课程的具体时间安排，包括星期几和时间段
 * @param dayOfWeek: DayOfWeek:1035 (表示课程在哪一天进行)
 * @param timePeriod: TimePeriod:1151 (表示课程在哪个时间段进行)
 */
import { Serializable } from 'Plugins/CommonUtils/Send/Serializable'

import { DayOfWeek } from 'Plugins/CourseManagementService/Objects/DayOfWeek';
import { TimePeriod } from 'Plugins/CourseManagementService/Objects/TimePeriod';


export class CourseTime extends Serializable {
    constructor(
        public  dayOfWeek: DayOfWeek,
        public  timePeriod: TimePeriod
    ) {
        super()
    }
}


