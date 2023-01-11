const connection = require("../database/prismaClient");

module.exports = {
  async index(req, resp) {
    try {
      const categories = await connection.categories.findMany();

      return resp.status(200).json(categories);
    } catch (error) {
      return resp.status(400).json({ message: error.message });
    }
  },
  async create(req, resp) {
    try {
      const { id, Category } = req.body;
      const categories = await connection.categories.create({
        data: {
          id,
          Category,
        },
      });
      return response.status(201).json({ categories });
    } catch (error) {
      return resp.status(400).json({ message: error.message });
    }
  },
};
