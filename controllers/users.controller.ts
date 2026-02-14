import type { Context } from "hono"
import { SchoolModel } from "../models/school.model"
import { UserModel } from "../models/user.model"

export default class UsersController {
    async getListData(c: Context) {
        const users = await UserModel.fetchAll({ withRelated: ['school', 'class'] })

        const data = users.models.map((item: any) => {
            return {
                id: item.get('id'),
                name: item.get('name'),
                gender: item.get('gender'),
                address: item.get('address'),
                school: item.related('school').get('name'),
                class: item.related('class').get('class')
        }
        })
        return c.json({
            status: true,
            message: "Daftar User berhasil ditampilkan",
            data: data
        })
    }
}
