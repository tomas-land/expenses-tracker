import {
  createNewCategory,
  getCategories
} from "@lib/prisma/categories";
import { NextApiRequest, NextApiResponse } from "next";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method === "GET") {
    try {
      const categories = await getCategories();
      // if (error) throw new Error(error);
      return res.json(categories);
    } catch (error) {
      return res.status(500).json(error.message);
    }

  }
  if (req.method === "POST") {
    try {
      const data = req.body;
      const { newCategory, error } = await createNewCategory(data);
      if (error) throw new Error(error);
      return res.status(200).json({ newCategory });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};

export default handler;
