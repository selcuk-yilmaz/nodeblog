const mongoose = require("mongoose");
//! AŞAĞIDA KEY OLARAK name KULLANMAMIZIN NEDENİ categorie.handlebars da inputunda name="name" olarak gönderdiğimiz için ÇOK ÖNEMLİ
const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
});
module.exports = mongoose.model("Category", CategorySchema);
