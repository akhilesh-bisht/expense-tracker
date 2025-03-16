import { Categories, Transaction } from "../models/model.js";

// POST: Create a new category
export async function create_Categories(req, res) {
  try {
    const newCategory = new Categories({
      type: "Investment",
      color: "#FCBE44",
    });

    await newCategory.save();
    res.json(newCategory);
  } catch (err) {
    res
      .status(400)
      .json({ message: `Error while creating categories: ${err}` });
  }
}

// GET: Fetch all categories
export async function get_Categories(req, res) {
  try {
    const data = await Categories.find({});
    const filteredData = data.map((v) => ({ type: v.type, color: v.color }));
    res.json(filteredData);
  } catch (err) {
    res.status(500).json({ message: "Error fetching categories", error: err });
  }
}

// POST: Create a new transaction
export async function create_Transaction(req, res) {
  try {
    if (!req.body) {
      return res.status(400).json({ message: "Post HTTP Data not Provided" });
    }

    const { name, type, amount } = req.body;

    const newTransaction = new Transaction({
      name,
      type,
      amount,
      date: new Date(),
    });

    await newTransaction.save();
    res.json(newTransaction);
  } catch (err) {
    res
      .status(400)
      .json({ message: `Error while creating transaction: ${err}` });
  }
}

// GET: Fetch all transactions
export async function get_Transaction(req, res) {
  try {
    const data = await Transaction.find({});
    res.json(data);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching transactions", error: err });
  }
}

// DELETE: Remove a transaction
export async function delete_Transaction(req, res) {
  try {
    if (!req.body) {
      return res.status(400).json({ message: "Request body not Found" });
    }

    await Transaction.deleteOne(req.body);
    res.json({ message: "Record Deleted" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error while deleting Transaction Record", error: err });
  }
}

// GET: Fetch labels with aggregated data

export async function get_Labels(req, res) {
  try {
    const result = await Transaction.aggregate([
      {
        $lookup: {
          from: "categories", // Make sure this matches the collection name in MongoDB
          localField: "type",
          foreignField: "type",
          as: "categories_info",
        },
      },
      { $unwind: "$categories_info" },
    ]);

    if (!result.length) {
      return res.status(404).json({ message: "No data found" });
    }

    const data = result.map((v) => ({
      _id: v._id,
      name: v.name,
      type: v.type,
      amount: v.amount,
      color: v.categories_info.color,
    }));

    res.status(200).json(data);
  } catch (err) {
    console.error("Error in get_Labels:", err);
    res
      .status(500)
      .json({ message: "Lookup Collection Error", error: err.message });
  }
}
