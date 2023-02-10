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
    const expenseDB = await prisma.expense.create({
      data: {
        amount: amount,
        desc: desc,
        CategoriesOnExpenses: {
          create: [
            {
              assignedAt: new Date(),
              Category: {
                connect: {
                  id: categoryID,
                },
              },
            },
          ],
        },
      },
    });
    return { expense: expenseDB };
  } catch (error) {
    return { error };
  }
}
///////////////////////
export async function deleteExpense(id) {
  try {
    const expense = await prisma.Expense.delete({
      where: { id: Number(id) },
    });
    return { expense };
  } catch (error) {
    return { error };
  }
}
////////////////////////
export async function getTotalAmountExpenses() {
  try {
    const totalAmountExpenses = await prisma.expense.aggregate({
      _sum: {
        amount: true,
      },
    });
    return totalAmountExpenses;
  } catch (error) {
    return { error };
  }
}
