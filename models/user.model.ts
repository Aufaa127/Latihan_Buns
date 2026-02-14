import { bookshelf } from "../config/database";


export const UserModel = bookshelf.model("UserModel", {
  tableName: "users",
  idAttribute: "id",
    school (){
      return this.belongsTo('SchoolModel','school_id')    
    },
    class (){
    return this.belongsTo('ClassModel', 'class_id')
    }
})