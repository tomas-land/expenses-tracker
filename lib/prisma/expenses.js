import prisma from ".";
import {
  startOFPreviousMonth,
  endOFPreviousMonth,
  startOFMonth,
} from "@lib/dayJS";

export async function getExpensesWithCategory() {
  try {
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
////////////////////////
export async function getPreviousMonthTotalAmountExpenses() {
  try {
    const previousMonthTotalAmountExpenses = await prisma.Expenses.aggregate({
      where: {
        createdAt: {
          gte: startOFPreviousMonth,
          lte: endOFPreviousMonth,
        },
      },
      _sum: {
        amount: true,
      },
    });
    return previousMonthTotalAmountExpenses;
  } catch (error) {
    return { error };
  }
}
