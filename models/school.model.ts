import { bookshelf } from "../config/database";
import { UserModel } from "./user.model";

export const SchoolModel = bookshelf.model('SchoolModel',{
    tableName: 'schools',
    users(){
        return this.hasMany(UserModel,'school_id')
    }

})