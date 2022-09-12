const connection = require('../database/prismaClient');

module.exports = {
async index(req,resp) {
    try {
        const users = await connection.user.findMany();
        
        return resp.status(200).json(users);
    } catch (error) {
        return resp.status(400).json({ message: error.message });
    };

},
async create(req,resp) {
    try {
        const { name , password} = req.body;

        const users = await connection.user.create({
            data: {
                name,
                password
            }
        })

        return response.status(201).json({ users });

    } catch (error) {
        return resp.status(400).json({ message: error.message });

    }
}
};