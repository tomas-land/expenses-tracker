import {
 createNewCategory
} from "@lib/prisma/categories";

const handler = async (req, res) => {
  // if (req.method === "GET") {
  //   try {
  //     const { expenses, error } = await getExpensesWithCategory();
  //     if (error) throw new Error(error);
  //     return res.status(200).json({ expenses });
  //   } catch (error) {
  //     return res.status(500).json({ error: error.message });
  //   }
  // }
  if (req.method === "POST") {
    try {
      const data = req.body;
      const { newCategory, error } = await createNewCategory(data);
      if (error) throw new Error(error);
      return res.status(200).json( {newCategory} );
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  if (req.method === "DELETE") {
    try {
      const id = req.body;
      const { Expense, error } = await deleteExpense(id);
      if (error) throw new Error(error);
      return res.status(200).json({ Expense });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};

export default handler;
