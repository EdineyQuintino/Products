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
      const { product_name, productCategory } = req.body;
      const categories = await connection.categories.create({
        data: {
          product_name,
          productCategory,
        },
      });
      return response.status(201).json({ categories });
    } catch (error) {
      return resp.status(400).json({ message: error.message });
    }
  },
};
