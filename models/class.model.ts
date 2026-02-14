import { bookshelf } from "../config/database"; 
import { UserModel } from "./user.model";

export const ClassModel = bookshelf.model('ClassModel',{
    tableName: 'classes',
    idAttribute: 'id',

    school() {
        return this.belongsTo('SchoolModel', 'school_id'); 
    },

    users(){
        return this.hasMany('UserModel','class_id')
    }
})