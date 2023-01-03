import { getExpenses } from "../../../lib/prisma/expenses";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { expenses, error } = await getExpenses();
      if (error) throw new Error(error);
      return res.status(200).json({ expenses });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};

export default handler;
