const { mongoose } = require("../../../Database/database.js");
const { Schema, model: Model } = mongoose;

const $schemaData = new Schema(
 {
  name: { type: String, required: true, unique: true },
  level: { type: Number, required: true, unique: true },
  description: { type: String },
 },
 { timestamps: true },
 {
  writeConcern: {
   w: "majority",
   j: true,
   wtimeout: 1000,
  },
 }
);

class Role {
 constructor($name, $level, $description) {
  this.name = $name;
  this.level = $level;
  this.description = $description;
 }

 GetMongoose = mongoose;

 GetFormat = {
  name: { type: "String", required: true, unique: true },
  level: { type: "Number", required: true, unique: true },
  description: { type: "String" },
 };

 GetModel = new Model("Roles", $schemaData);
}

module.exports = Role;
