import React, { useState } from "react";
import "boxicons";
import { default as api } from "../store/apiSlice";

export default function List() {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  const [deleteTransaction] = api.useDeleteTransactionMutation();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const handlerClick = (e) => {
    if (!e.target.dataset.id) return;
    deleteTransaction({ _id: e.target.dataset.id });
  };

  const filteredTransactions = isSuccess
    ? data.filter((transaction) => {
        const matchesSearch = transaction.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesCategory =
          categoryFilter === "all" || transaction.type === categoryFilter;
        return matchesSearch && matchesCategory;
      })
    : [];

  return (
    <div className="max-w-lg mx-auto w-full rounded-xl  p-6">
      <h1 className="font-bold text-2xl text-gray-800 text-center mb-4  ">
        Transaction History
      </h1>

      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="Investment">Investment</option>
          <option value="Expense">Expense</option>
          <option value="Savings">Savings</option>
        </select>
      </div>

      <div className="space-y-3">
        {isFetching && (
          <div className="text-gray-500">Fetching transactions...</div>
        )}
        {isError && (
          <div className="text-red-500">Error loading transactions.</div>
        )}
        {isSuccess &&
          filteredTransactions.map((v, i) => (
            <Transaction key={i} category={v} handler={handlerClick} />
          ))}
      </div>
    </div>
  );
}

function Transaction({ category, handler }) {
  if (!category) return null;
  return (
    <div
      className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-lg shadow-md"
      style={{ borderLeft: `6px solid ${category.color ?? "#e5e5e5"}` }}
    >
      <span className="text-gray-800 font-medium">{category.name ?? ""}</span>
      <button className="text-red-500 hover:text-red-700" onClick={handler}>
        <box-icon
          data-id={category._id ?? ""}
          color={category.color ?? "#e5e5e5"}
          size="20px"
          name="trash"
        ></box-icon>
      </button>
    </div>
  );
}
