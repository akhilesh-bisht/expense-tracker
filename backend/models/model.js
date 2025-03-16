import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Categories Model
const categoriesSchema = new Schema({
  type: { type: String, default: "Investment" },
  color: { type: String, default: "#FCBE44" },
});

// Transactions Model
const transactionSchema = new Schema({
  name: { type: String, default: "Anonymous" },
  type: { type: String, default: "Investment" },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

// Creating models
const Categories = mongoose.model("categories", categoriesSchema);
const Transaction = mongoose.model("transactions", transactionSchema);

// Exporting models
export { Categories, Transaction };
