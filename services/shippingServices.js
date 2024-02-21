const { config } = require('../config/config');

class ShippingServices {

    constructor(){
        this.baseURL = config.
    }

    async getUsers(){
        const listUsers = await this.table.findAll();
        return listUsers; 
    }
    async createUsers(user){
        const hash  = await bcrypt.hash(user.password,10);
        const data = await this.table.create({
            ...user,
            password: hash
        })
        delete data.dataValues.password; // delete password
        return data;
    }
    async findByEmail (email){
        const user = await this.table.findOne({
            where: {
                email
            }
        })
        return user;
    }
}

module.exports = ShippingServices;