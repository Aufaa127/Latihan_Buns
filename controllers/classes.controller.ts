import type { Context } from "hono"
import { ClassModel } from "../models/class.model"
import { UserModel } from "../models/user.model"

export default class ClassesController {
    async getListData(c: Context) {
        const classes = await ClassModel.fetchAll({withRelated: ['school']})

        const data = classes.models.map((item: any) => {  
            return {    
                id: item.get('id'),
                class: item.get('class'),
                school: item.related('school').get('school_name')
            }  

        })
        return c.json({
            status: true,
            message: "Daftar Kelas berhasil ditampilkan",
            data: data
        })
    }
    async getDetailData(c: Context) {
        const id = c.req.param('id')
        const classData = await ClassModel.where({ id: id }).fetch({ require: false , withRelated: ['school','users.school']})
        if (!classData) {   
            return c.json({
                status: false,
                message: "Data tidak ditemukan",
                data: null
            })
        }

        return c.json({
            status: true,
            message: "Berhasil mendapatkan detail kelas",
            data: {
                id: classData.get('id'),
                class_name: classData.get('class'),
                school: classData.related('school').toJSON(),
                students: classData.related('users').toJSON()

            }

        })
    }
}
