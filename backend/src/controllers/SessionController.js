const connection = require("../database/connection");

module.exports = {
  async craete(request, response) {
    const { id } = request.body;

    console.log(id);

    const ong = await connection("ongs")
      .where("id", id)
      .select("name")
      .first();

    if (!ong) {
      return response.status(400).json({ error: "Not Ong" });
    }

    return response.json(ong);
  }
};
