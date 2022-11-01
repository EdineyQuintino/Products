const connection = require("../database/prismaClient");

module.exports = {
  async index(req, resp) {
    try {
      const products = await connection.products.findMany();

      return resp.status(200).json(products);
    } catch (error) {
      return resp.status(400).json({ message: error.message });
    }
  },
  async create(req, resp) {
    try {
      const { product_name, productCategory } = req.body;
      const products = await connection.products.create({
        data: {
          product_name,
          productCategory,
        },
      });
      return response.status(201).json({ products });
    } catch (error) {
      return resp.status(400).json({ message: error.message });
    }
  },
};
