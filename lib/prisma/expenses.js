import prisma from ".";
import dayjs from "dayjs";

export async function getExpensesWithCategory() {
  try {
    const startOFMonth = dayjs().startOf("month").toISOString();
    const expenses = await prisma.Expenses.findMany({
      where: {
        createdAt: {
          gte: startOFMonth,
        },
      },
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return JSON.parse(JSON.stringify(expenses));
  } catch (error) {
    return { error };
  }
}
///////////////////////
export async function createExpense(expense) {
  const { amount, desc, categoryID } = expense;
  try {
    const newExpense = await prisma.Expenses.create({
      data: {
        amount: amount,
        desc: desc,
        categoryID: categoryID,
      },
    });
    return { newExpense };
  } catch (error) {
    return { error };
  }
}
///////////////////////
export async function deleteExpense(id) {
  try {
    const deletedExpense = await prisma.Expenses.delete({
      where: { id: Number(id) },
    });
    return { deletedExpense };
  } catch (error) {
    return { error };
  }
}
////////////////////////
export async function getTotalAmountExpenses() {
  try {
    const startOFMonth = dayjs().startOf("month").toISOString();
    const totalAmountExpenses = await prisma.Expenses.aggregate({
      where: {
        createdAt: {
          gte: startOFMonth,
        },
      },
      _sum: {
        amount: true,
      },
    });
    return totalAmountExpenses;
  } catch (error) {
    return { error };
  }
}
