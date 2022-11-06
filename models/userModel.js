const fs = require("fs");
const { dirname } = require("path");


  const User = {
    fileName: 'database/register.json',
    create: function(userDate) {
      let allUser = this.getUsers();
      let newUser = {
        id: this.generateId(),
        ...userDate
      }
      allUser.push(newUser)
      fs.writeFileSync(this.fileName,JSON.stringify(allUser,null, ' '));
      return newUser;
    },

    generateId: function() {
      let allUser = this.getUsers();
      let lastUser = allUser.pop();
      if(lastUser) {
        return lastUser.id + 1
      }
      return 1;
    },

    getUsers: function() {
      return JSON.parse(fs.readFileSync("database/register.json", "utf-8"))
    },

    findUserById: function() {
      let allUser = this.getUsers();
      let userFound = allUser.find(user => user.id === id);
      return userFound;
    },

    findUserByField: function(field,value) {
      let allUser = this.getUsers();
      let userFound = allUser.find(user => user[field] === value);
      return userFound;
    }
  }
  


module.exports = User

