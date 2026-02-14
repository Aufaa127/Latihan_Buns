import type { Context } from "hono"
import { SchoolModel } from "../models/school.model"

export default class SchoolsController {
    async getListData(c: Context) {
        const schools = await SchoolModel.fetchAll()
        
        const data = schools.models.map((item: any) => {
            return {
                id: item.get('id'),
                name: item.get('name'),
            }
        })

        return c.json({
            status: true,
            message: "Data berhasil ditampilkan",
            data: data
        })
    }

    async getDetailData(c: Context) {
        const id = c.req.param('id')
        const school = await SchoolModel.where({ id: id }).fetch({ require: false , withRelated: ['users.class']})

        if (!school) {
            return c.json({
                status: false,
                message: "Data tidak ditemukan",
                data: null
            })
        }

        return c.json({
            status: true,
            message: "Berhasil mendapatkan detail sekolah",
            data: {
                id: school.get('id'),
                name: school.get('name'),
                address: school.get('address'),
                users: school.related('users')
                
            }
        })
    }
}