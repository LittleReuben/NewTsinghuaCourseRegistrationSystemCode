/**
 * CheckStudentHasSuccessfullyTakenCourseMessage
 * desc: 查询学生是否曾选上某门课程的功能需求
 * @param studentToken: String (学生登录令牌，用于验证身份)
 * @param courseID: Int (课程ID，用于指定查询的课程)
 * @return hasTakenCourse: Boolean (布尔值，表示学生是否选上过该课程)
 */
import { TongWenMessage } from 'Plugins/TongWenAPI/TongWenMessage'



export class CheckStudentHasSuccessfullyTakenCourseMessage extends TongWenMessage {
    constructor(
        public  studentToken: string,
        public  courseID: number
    ) {
        super()
    }
    getAddress(): string {
        return "127.0.0.1:10010"
    }
}

