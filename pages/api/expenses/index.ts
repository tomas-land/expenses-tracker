import {
  getExpensesWithCategory,
  createExpense,
  deleteExpense,
} from "@lib/prisma/expenses";
import { NextApiRequest, NextApiResponse } from "next";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const  expenses = await getExpensesWithCategory();
      // if (error) throw new Error(error);
      return res.json(expenses);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  if (req.method === "POST") {
    try {
      const data = req.body;
      const { expense, error }: any = await createExpense(data);
      if (error) throw new Error(error);
      return res.status(200).json(expense);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  if (req.method === "DELETE") {
    try {
      const id = req.body;
      const { expense, error }: any = await deleteExpense(id);
      if (error) throw new Error(error);
      return res.status(200).json(expense);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
};

export default handler;
