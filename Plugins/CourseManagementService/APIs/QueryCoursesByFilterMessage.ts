/**
 * QueryCoursesByFilterMessage
 * desc: 按复杂条件动态查询课程，支持通过课程组号、课程组名、教师姓名及上课时间条件过滤查询课程信息。
 * @param userToken: String (用于验证用户权限的token。)
 * @param courseGroupID: Int (课程组ID，用于过滤课程信息。)
 * @param courseGroupName: String (课程组名，用于过滤课程信息。)
 * @param teacherName: String (教师姓名，用于过滤课程信息。)
 * @param allowedTimePeriods: CourseTime:1173 (允许的课程时间列表，用于过滤课程信息。)
 * @return filteredCourses: PairOfGroupAndCourse:1196 (符合过滤条件的课程组和课程信息列表。)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'
import { CourseTime } from 'Plugins/CourseManagementService/Objects/CourseTime';


export class QueryCoursesByFilterMessage extends TongWenMessage {
    constructor(
        public  userToken: string,
        public  courseGroupID: number | null,
        public  courseGroupName: string | null,
        public  teacherName: string | null,
        public  allowedTimePeriods: CourseTime[]
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10013"
    }
}

